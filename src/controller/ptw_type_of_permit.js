const commonfun = require('../libraries/commonfunction');
const userquery = require('../libraries/userquery');
const Joi = require("joi");
const workPermit = require('../models/ptw_type_of_permit');
var dateFormat = require('dateformat');

exports.addTypeofPermit = {

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
          createdAt: dateFormat(new Date(), 'yyyy-mm-dd_HH-MM')
        };
        commonfun.insertTable(workPermit, res).then((res,
        ) => {
          if (res) {
            let response = {
              success:true,
              error:false,
              message:'Insert Data',
              statusCode: 200,
              data: res
            };
            return reply(
                response
           //   edc : commonfun.encrypt(JSON.stringify(response))
             );
          }
          else {
            let response = {
              success:false,
              error:true,
              message:'Unable to insert details',
              statusCode: 400,
              data: res
            };
            return reply(
                response
           //  edc : commonfun.encrypt(JSON.stringify(response))
            );
          }
        });
      }
};

exports.GetTypeofPermit = {
    handler: async function (request, reply) {
      // console.log(request.params)
      // console.log(request.params.ptw_id)
      let allData={
        selectList: '*',
        where:`typeid=${request.params.typeid}`
      }
    //  console.log('aruna',allData);
      await commonfun.commonSelectQuery(workPermit, null, allData)
        .then(result => {
                let response = {
                    success:true,
                    error:false,
                    message:'Data Available',
                    statusCode: 200,
                    data: result
                };
                return reply(
                    response
                   // edc : commonfun.encrypt(JSON.stringify(response))
                );
        }).catch(err => {      
          let response = {
            success:false,
            error:true,
            message:'Unable to fetch category list',
            statusCode: 400,
            data: result
          };
          return reply(
              response
           // edc : commonfun.encrypt(JSON.stringify(response))
          );
        });
    }
};

exports.updateTypeofPermit = {
    validate: {
        payload: {
            typeid: Joi.number().required(),
            name: Joi.string().required(),
            status: Joi.boolean().required()
        }
    },
    handler: function (request, reply) {
        var typeid = request.payload.typeid
        var name = request.payload.name
        var status = request.payload.status
        var createdAt= dateFormat(new Date(), 'yyyy-mm-dd_HH-MM')
        const colname = {
           name: name,
           status: status
        };
        const condkey = {
            typeid: typeid
        }
            userquery.updatemultiple(workPermit, colname, condkey).then(result => {
              if (result) {
                let response = {
                  success:true,
                  error:false,
                  message:'Update work required list',
                  statusCode: 200,
                  data: result
                };
                return reply(
                    response
                // edc : commonfun.encrypt(JSON.stringify(response))
                );      
              }
            }).catch(err=>{
              let response = {
                success:false,
                error:true,
                message:'Unable to Update work required list',
                statusCode: 400,
                data: result
              };
              return reply(
                  response
            //   edc : commonfun.encrypt(JSON.stringify(response))
              );
            })
    },
}