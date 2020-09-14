const CryptoJS = require('crypto-js')
// const Application_audit = require('../model/Application_audit');
const config = require('./../config/config');
var fs = require("fs");

const ENCRYPTION_KEY =require('../config/config'); // Must be 256 bytes (32 characters)

const IV_LENGTH = 16; // For AES, this is always 16
// const jwtDecode = require('jwt-decode');
const { raw } = require('objection')

// this function is used to encrypt the data.
// encryption key is the const key which will remain same for all the users.
// if you want more security you can pass the clientname was encryption key.
export function encrypt(text) {
  return CryptoJS.AES.encrypt(text, ENCRYPTION_KEY.SECURITY_KEY).toString();
}

// this function is used to decrypt the data
export function decrypt(text) {
  return CryptoJS.AES.decrypt(text, ENCRYPTION_KEY.SECURITY_KEY).toString(CryptoJS.enc.Utf8);
}

// Only Insert function for any model dynamically
export async function insertTable(Model, data) {
  return Model.query().insert(data);
}

// Only Insert function for any model dynamically with transaction
export async function insertTabletrx(Model, data, trx) {
  return Model.query().insert(data).transacting(trx);
}

// Insert or update function for any model
// eg: data => [{}] or {}
export async function insertOrUpdate(Model, data) {
  const firstData = data[0] ? data[0] : data;
  const insertQuery = await Model.query().insert(data).toString()
  const onConflict = await Object.getOwnPropertyNames(firstData).map(c => c === Model.idColumn ? ',' : `${c} = VALUES(${c})`).join(',').replace(',,', '')
  const que = await `${insertQuery} ON DUPLICATE KEY UPDATE ${onConflict}`
  console.log('que', que.toString())
  return Model.raw(que);
}

// common function to track crud operations on all tables
// in this function arguments are
// operation - I/U/D, I - Insert, U - Update, D - Delete
// table_name - crud operation table name
// done_by - emp_id, emp_id from employees table
// operation time is datetime - yyyy-mm-dd HH:ii:ss
// details are like more details of the operation
export async function trackAudit(operation, table_name, done_by, operation_time, details) {
  const track = await Application_audit.query()
    .insert({ operation, table_name, done_by, operation_time, details });
  // console.log(track.operationDetails());
  return track.operationDetails();
}

// insert or Update function using transaction
// eg: data => [{}] or {}
export async function insertOrUpdateTransaction(Model, data, trx) {
  const firstData = data[0] ? data[0] : data;
  const insertQuery = await Model.query().insert(data).toString()
  const onConflict = await Object.getOwnPropertyNames(firstData).map(c => c === Model.idColumn ? ',' : `${c} = VALUES(${c})`).join(',').replace(',,', '')
  const que = await `${insertQuery} ON DUPLICATE KEY UPDATE ${onConflict}`
  console.log(Model.raw(que).toString());
  return Model.raw(que).transacting(trx);
}

// common function to track crud operations on all tables
// in this function arguments are
// operation - I/U/D, I - Insert, U - Update, D - Delete
// table_name - crud operation table name
// done_by - emp_id, emp_id from employees table
// operation time is datetime - yyyy-mm-dd HH:ii:ss
// details are like more details of the operation
// trx - to be send from transaction
export async function trackAuditTransaction(operation, table_name, done_by, operation_time, details, trx) {
  const track = await Application_audit.query(trx)
    .insert({ operation, table_name, done_by, operation_time, details });
  // console.log(track.operationDetails());
  return track.operationDetails();
}

// syntax
// data to update
// data = {
// status: 3,
// value : raw(`value + 1`)
// }

// where conditions
// conditions = {
//   id: 1
// }
// or
// conditions = `id in (1,2,3,4,5) and ...`
// or
// conditions = null

// limit
// limit = 1 or limit = null
// commonUpdate('Model', data, conditions, limit,'transaction')

// common update function
export async function commonUpdate(Model, data, condition, limit, trx) {
  let query;
  return new Promise((resolve, reject) => {
    try {
      let upData
      // if update data is in string then aplly raw
      if (typeof data === 'string') {
        upData = raw(data);
      } else { // else direct object
        upData = data;
      }
      // query preparation
      query = Model.query(trx).update(upData);
      if (condition) query = query.whereRaw(condition);
      if (limit) query = query.limit(limit);
      console.log(query.toString(), "FINALLL Update Query");
      resolve(query)
    } catch (error) {
      console.log(error, "$$error in common function");
      trx.rollback()
      reject(error)
    }
  })
}

// syntax
// commonSelectQuery('Model', 'ModelAlias / null', {
//   selectList: `h.id, h.name, sum(h.age)`,
//   joins: [
//     { type: 'inner', tableName: '', alias: '', onConditions: `h.id = p.id and p.status = 1` },
// { type: 'relation', tableName: 'zone', alias: 'zo' }
//   ],
// where: null, // null / string
// having: null, // null / string
// groupBy: null, // null / string
// orderBy: null, // null / string
// limit: 1 // null / number
// })

// common select function for retreive all types of select queries
// not suported union, custom joins
export async function commonSelectQuery(Model, ModelAlias, allData) {
  let query;
  return new Promise((resolve, reject) => {
    try {
      // 1 model
      query = Model.query();
      // 2 alias
      if (ModelAlias) query = query.alias(ModelAlias);
      // 3 select list
      query = query.select(raw(allData.selectList));
      // 4 joins
      if (allData.joins) {
        for (const row of allData.joins) {
          switch (row.type) {
            case 'left': query = query.leftJoin(`${row.tableName} as ${row.alias}`, raw(row.onConditions));
              break;
            case 'right': query = query.rightJoin(`${row.tableName} as ${row.alias}`, raw(row.onConditions));
              break;
            case 'inner': query = query.innerJoin(`${row.tableName} as ${row.alias}`, raw(row.onConditions));
              break;
            case 'full': query = query.fullOuterJoin(`${row.tableName} as ${row.alias}`, raw(row.onConditions));
              break;
            case 'relation': query = query.joinRelation(`${row.tableName} as ${row.alias}`);
              break;
            case 'inner-relation': query = query.innerJoinRelation(`${row.tableName}`);
              break;
            case 'left-relation': query = query.leftJoinRelation(`${row.tableName}`);
              break;
            case 'right-relation': query = query.rightJoinRelation(`${row.tableName}`);
              break;
            default: break;
          }
        }
      }
      // 5 where
      if (allData.where) query = query.whereRaw(allData.where);
      // 6 having
      if (allData.having) query = query.havingRaw(allData.having);
      // 7 group by
      if (allData.groupBy) query = query.groupByRaw(allData.groupBy);
      // 8 order by
      if (allData.orderBy) query = query.orderByRaw(allData.orderBy);
      // 9 limit
      if (allData.limit) query = query.limit(allData.limit);
      console.log(query.toString(), "FINALLL Select Query");
      resolve(query)
    } catch (error) {
      console.log(error, "$$error in common function");
      reject(error)
    }
  })
}

// need to send 
//  imageData = {
//   user_id: imageData.user_id,
//   relevant_type: imageData.relevant_type,
//   filedata: imageData.filedata,
//   filename: imageData.filename
// };
export async function image_upload (imageData) {
  return new Promise((resolve, reject) => {
    try {
      // let imageData = imageData;
      let ext;
      let updalodPath = '';
      if (imageData.imageName) {
          const lastIndex = (imageData.imageName).lastIndexOf('.');
          ext = imageData.imageName.substr(lastIndex + 1, imageData.imageName.length);
          console.log(ext,"++++++++++++++++++");
          // console.log(ext, "extensionnn", imageData.imageName, 'octet-stream');
          if (ext == 'octet-stream') {
              ext = 'doc';
          } 
          
          updalodPath = `${config.IMAGE_UPLOAD}${imageData.filename}`;
          console.log('..... UPLOAD PATH .......');

          console.log(updalodPath);

          console.log(imageData.filename, "fileNamemme");

          // remove header
          let base64Image = imageData.filedata.split(';base64,').pop();
          // create file
          fs.writeFileSync(updalodPath, base64Image, { encoding: 'base64' });
          resolve({success:true})
      }
    }
    catch (error) {
      reject(error)
    }
  })  
};

/**
 * method to read Data from JWT Token
 */
// export async function decodeJwtToken(token) {
//   var decoded = jwtDecode(token);

//   return decoded.role;
// }


export async function returnresult(reply, data) {
  return await reply({
    statusCode: data.statusCode,
    success: data.sucess,
    error: data.errmsg,
    message: data.message,
    data: data.result
  });
}
