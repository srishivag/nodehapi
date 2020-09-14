const commonfun = require('../libraries/commonfunction');
const userquery = require('../libraries/userquery');
const Joi = require("joi");
const list = require('../models/ptw_auth_list');
var dateFormat = require('dateformat');

exports.postauthlist = {

    validate: {
        payload: {
          auth_name: Joi.string().required(),
          status: Joi.boolean().required()
       
        }
      },
      handler: async function (request, reply) {
        let res = {
          auth_name: request.payload.auth_name,
          status: request.payload.status,
          createdAt: dateFormat(new Date(), 'yyyy-mm-dd_HH-MM'),
          updatedAt: dateFormat(new Date(), 'yyyy-mm-dd_HH-MM')
        };
        commonfun.insertTable(list, res).then((res,
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
         //   console.log(res)
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
          //  console.log(err)
          }
        });
      }
};

exports.Getauth_list = {
    handler: async function (request, reply) {
      // console.log(request.params)
      // console.log(request.params.ptw_id)
      let allData={
        selectList: '*',
        where:`auth_id=${request.params.auth_id}`
      }
    //  console.log('aruna',allData);
      await commonfun.commonSelectQuery(list, null, allData)
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
          let response = {
            success:false,
            error:true,
            message:'Unable to fetch auth list',
            statusCode: 400,
            data: result
          };
          return reply({
            edc : commonfun.encrypt(JSON.stringify(response))
          });
  
        });
  
    }
};

exports.updateauthList = {
    validate: {
        payload: {
          auth_id: Joi.number().required(),
          auth_name: Joi.string().required(),
          status: Joi.boolean().required(),
        }
    },
    handler: function (request, reply) {
        var auth_id = request.payload.auth_id
        var auth_name = request.payload.auth_name
        var status = request.payload.status
        var  updatedAt = dateFormat(new Date(), 'yyyy-mm-dd_HH-MM')
       // const tablemap = attachment;
        const colname = {
            auth_name: auth_name,
            status: status,
            updatedAt: updatedAt
        };
        const condkey = {
            auth_id: auth_id
        }
            userquery.updatemultiple(list, colname, condkey).then((result) => {
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