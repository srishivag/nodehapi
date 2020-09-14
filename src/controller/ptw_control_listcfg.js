var Joi = require('joi');
var common = require('../libraries/commonfunction.js');
var input = require('../models/ptw_control_list.js');
var userquery = require('../libraries/userquery.js');
var dateFormat = require('dateformat');
//  insert operation
exports.ptw_control_insert = {
  validate: {
    payload: {
        cid: Joi.number().required(),
        name: Joi.string().required(),
        code: Joi.string().required(),
        status: Joi.boolean().required(),
        createdAt: Joi.string().required(),
        updatedAt: Joi.string().required()  
    }
  },
  handler: function (request, reply) {
    let data = {
        cid: request.payload.cid,
        name: request.payload.name,
        code: request.payload.code,
        status: request.payload.status,
        createdAt: dateFormat(new Date(), 'yyyy-mm-dd_HH-MM'),
        updatedAt:dateFormat(new Date(), 'yyyy-mm-dd_HH-MM'),
    }
    common.insertTable(input, data).then((err, res) => {
      // function (err, res) {
      if (err) {
        var response={
          statusCode: 200,
          error: true,
          message: err.sqlMessage,
          data: null
        }
        return reply({edc: common.encrypt(JSON.stringify(response))});
      }
      else {
      var response={
          statusCode: 200,
          error: false,
          message: "Document saved successfully",
          data: null,
        }
        return reply({edc: common.encrypt(JSON.stringify(response))});
      }
    });
  }
}

//select opeartion
exports.ptw_control_select = {
    handler: function (request, reply) {
      console.log("enter to this route")
      let where = "cid=" + request.params.id
      console.log('---------------------');
      console.log(where);
      let selectdata = {
        selectList: '*',
        where: where.toString()
      }
      common.commonSelectQuery(input, null, selectdata)
        .then(result => {
          console.log("result========= ", result)
          // let ret = result;
          //(ret)
         var response={
            statusCode: 200,
            error: false,
            success: true,
            data: result,
          }
          return reply({edc: common.encrypt(JSON.stringify(response))});

        }).catch(err => {
          console.log("error ", err);
         var response={
            statusCode: 200,
            error: true,
            success: false,
            data: err,
          }
          return reply({edc: common.encrypt(JSON.stringify(response))});
        });
    }
  }
//update operation
exports. ptw_control_update = {
    validate: {
        payload: {
            cid: Joi.number().required(),
            name: Joi.string().required(),
            code: Joi.string().required(),
            status: Joi.boolean().required()
        }
      },
    handler: function (request, reply) {
        console.log("update route");
        let cid= request.payload.cid
        let name= request.payload.name
        let code=request.payload.code
        let status= request.payload.status
        let updatedAt=dateFormat(new Date(), 'yyyy-mm-dd_HH-MM')
       const colname = {
        // pm_id: pm_id,
        cid: cid,
        name: name,
        code: code,
        status:status,
        updatedAt:updatedAt
      };
      const condkey = {
        cid: cid
      }
      console.log(colname,condkey)
      userquery.updatemultiple(input, colname, condkey).then(result=> {
        console.log("update multiple");
        // if (result) {
          var response={
            statusCode: 200,
            error: false,
            success: true,
            message: "Update Data",
            data: result,
          }
          return reply({edc: common.encrypt(JSON.stringify(response))});
        // }
      }).catch(err =>{
        console.log(err)
       var response={
          statusCode: 200,
          error: false,
          success: true,
          message: "not done",
          data: err,
        }
        return reply({edc: common.encrypt(JSON.stringify(response))});
      })
    },
  }