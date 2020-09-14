const commonfun = require('../libraries/commonfunction');
const userquery = require('../libraries/userquery');
const Joi = require("joi");
const raType = require('../models/Ra_type');
var dateFormat = require('dateformat');

exports.add_ra_Type = {

    validate: {
        payload: {
          name: Joi.string().required(),
          status: Joi.boolean().required()
       
        }
      },
      handler: async function (request, reply) {
        let res = {
          name: request.payload.name,
          status: request.payload.status,
          createdAt: dateFormat(new Date(), 'yyyy-mm-dd_HH-MM'),
          updatedAt: dateFormat(new Date(), 'yyyy-mm-dd_HH-MM')
        };
        commonfun.insertTable(raType, res).then((res,
        ) => {
          if (res) {
            let response = {
              success:true,
              error:false,
              message:'Insert Data',
              statusCode: 200,
              data: res
            };
            return reply({
              edc : commonfun.encrypt(JSON.stringify(response))
             });
          }
          else {
          let response = {
            success:false,
            error:true,
            message:'Unable to insert details',
            statusCode: 400,
            data: res
          };
          return reply({
           edc : commonfun.encrypt(JSON.stringify(response))
          });
          }
        });
 
      }
};

exports.Get_Ra_Type_List = {
    handler: async function (request, reply) {
      // console.log(request.params)
      // console.log(request.params.ptw_id)
      let allData={
        selectList: '*',
        where:`type_id=${request.params.type_id}`
      }
    //  console.log('aruna',allData);
      await commonfun.commonSelectQuery(raType, null, allData)
        .then(result => {
          console.log('result',result)
            if(result == ''){
                let response = {
                    success:false,
                    error:true,
                    message:'No Data Available',
                    statusCode: 400,
                    data: result
                };
                return reply({
                    edc : commonfun.encrypt(JSON.stringify(response))
                });
            }
            else {
                let response = {
                 success:true,
                 error:false,
                 message:'get the Data',
                 statusCode: 200,
                 data: result
                };
                return reply({
                    edc : commonfun.encrypt(JSON.stringify(response))
                }); 
            }
        }).catch(err => {
          let response = {
            success:false,
            error:true,
            message:'Unable to fetch category list',
            statusCode: 400,
            data: result
          };
          return reply({
            edc : commonfun.encrypt(JSON.stringify(response))
          });
  
        });
    }
};

// exports.updatecategoryList = {
//     validate: {
//         payload: {
//           cat_id: Joi.number().required(),
//           name: Joi.string().required(),
//           status: Joi.boolean().required(),
//         }
//     },
//     handler: function (request, reply) {
//         var cat_id = request.payload.cat_id
//         var name = request.payload.name
//         var status = request.payload.status
//         const colname = {
//             name: name,
//             status: status
//         };
//         const condkey = {
//             cat_id: cat_id
//         }
//             userquery.updatemultiple(category, colname, condkey).then(result => {
//               if (result) {
//                 let response = {
//                   success:true,
//                   error:false,
//                   message:'Update category list',
//                   statusCode: 200,
//                   data: result
//                 };
//                 return reply({
//                  edc : commonfun.encrypt(JSON.stringify(response))
//                 });
//               }
//             }).catch(err=>{
//               console.log(err)
//               let response = {
//                 success:false,
//                 error:true,
//                 message:'Unable to Update category list',
//                 statusCode: 400,
//                 data: result
//               };
//               return reply({
//                edc : commonfun.encrypt(JSON.stringify(response))
//               });
//               console.log(err)
//             })
//     },
// }