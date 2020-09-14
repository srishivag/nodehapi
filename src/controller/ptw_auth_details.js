const commonfun = require('../libraries/commonfunction');
const userquery = require('../libraries/userquery');
const Joi = require("joi");
const details = require('../models/ptw_auth_details');
var dateFormat = require('dateformat');

exports.postauthDetails = {

    validate: {
        payload: {
          ptw_id: Joi.number().required(),
          ptw_ref_id: Joi.string().required(),
          status: Joi.boolean().required(),
          auth_list_id: Joi.number().required(),
          typeofemploye: Joi.boolean().required(),
          empid: Joi.string().required()
        }
      },
      handler: async function (request, reply) {
        let res = {
          ptw_id: request.payload.ptw_id,
          ptw_ref_id: request.payload.ptw_ref_id,
          status: request.payload.status,
          auth_list_id: request.payload.auth_list_id,
          typeofemploye: request.payload.typeofemploye,
          empid: request.payload.empid,
          cretaedAt: dateFormat(new Date(), 'yyyy-mm-dd_HH-MM'),
          updatedAt: dateFormat(new Date(), 'yyyy-mm-dd_HH-MM')

        
        };
        commonfun.insertTable(details, res).then((res,
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

exports.Getauth_details = {
    handler: async function (request, reply) {
      let success = true;
      let error = false;
      let message = '';
      let ret = null;
      // console.log(request.params)
      // console.log(request.params.ptw_id)
      let allData={
        selectList: '*',
        where:`authid=${request.params.authid}`
      }
    //  console.log('aruna',allData);
      await commonfun.commonSelectQuery(details, null, allData)
        .then(result => {
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
          console.log(err);
          let response = {
            success:false,
            error:true,
            message:'Unable to fetch auth list',
            statusCode: 400,
         //   data: result
          };
          return reply(
         //  edc : commonfun.encrypt(JSON.stringify(response))
         response
          );
          console.log(response);
  
        });
    }
}

exports.updateauthDetails = {
    validate: {
        payload: {
          authid: Joi.number().required(),
          ptw_id: Joi.number().required(),
          ptw_ref_id: Joi.string().required(),
          status: Joi.boolean().required(),
          auth_list_id: Joi.number().required(),
          typeofemploye: Joi.boolean().required(),
          empid: Joi.string().required()

        }
    },
    handler: function (request, reply) {
        var authid = request.payload.authid
        var ptw_id = request.payload.ptw_id
        var ptw_ref_id = request.payload.ptw_ref_id
        var status = request.payload.status
        var auth_list_id = request.payload.auth_list_id
        var typeofemploye = request.payload.typeofemploye
        var empid = request.payload.empid
        var updatedAt = dateFormat(new Date(), 'yyyy-mm-dd_HH-MM')
       // const tablemap = attachment;
        const colname = {
            ptw_id: ptw_id,
            ptw_ref_id: ptw_ref_id,
            auth_list_id: auth_list_id,
            typeofemploye: typeofemploye,
            empid: empid,
            updatedAt: updatedAt
        };
        const condkey = {
            authid: authid
        }
            userquery.updatemultiple(details, colname, condkey).then((result) => {
              if (result) {
                let response = {
                  success:true,
                  error:false,
                  message:'Update auth list',
                  statusCode: 200,
                  data: result
                };
                return reply({
                 edc : commonfun.encrypt(JSON.stringify(response))
                });
              }
            }).catch(err=>{
              let response = {
                success:false,
                error:true,
                message:'Unable to Update auth list',
                statusCode: 400,
                data: result
              };
              return reply({
               edc : commonfun.encrypt(JSON.stringify(response))
              });
            })
    },
}