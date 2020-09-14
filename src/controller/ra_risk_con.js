const commonfun = require('../libraries/commonfunction');
const userquery = require('../libraries/userquery');
const Joi = require("joi");
const riskModel = require('../models/Ra_risk');
var dateFormat = require('dateformat');

exports.insert_risk= {

    validate: {
        payload: {
          title: Joi.string().required(),
          status: Joi.boolean().required()
       
        }
      },
      handler: async function (request, reply) {
        let res = {
          name: request.payload.name,
          ts_ref_no:request.payload.ts_ref_no,
          title:request.payload.title,          
          decription:request.payload.decription,
          location:request.payload.location,
          raconductedOn:request.payload.raconductedOn,
          status: request.payload.status,
          ratype:request.payload.ratype,
          createdBy:request.payload.createdBy,
          createdAt: dateFormat(new Date(), 'yyyy-mm-dd_HH-MM')
        };
        commonfun.insertTable(riskModel, res).then((res,
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

exports.GetRisk_List = {
    handler: async function (request, reply) {
      // console.log(request.params)
      // console.log(request.params.ptw_id)
      let allData={
        selectList: '*',
        where:`risk_id=${request.params.risk_id}`
      }
    //  console.log('aruna',allData);
      await commonfun.commonSelectQuery(riskModel, null, allData)
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

exports.updateriskList = {
    validate: {
        payload: {
          risk_id: Joi.number().required(),
          name: Joi.string().required(),
          status: Joi.boolean().required(),
        }
    },
    handler: function (request, reply) {
        var risk_id = request.payload.risk_id
        var name = request.payload.name
        var status = request.payload.status
            const colname = {
                name: name,
                status: status
            };
            const condkey = {
              risk_id: risk_id
            }
            userquery.updatemultiple(riskModel, colname, condkey).then(result => {
              if (result) {
                let response = {
                  success:true,
                  error:false,
                  message:'Update category list',
                  statusCode: 200,
                  data: result
                };
                return reply({
                 edc : commonfun.encrypt(JSON.stringify(response))
                });
              }
            }).catch(err=>{
              console.log(err)
              let response = {
                success:false,
                error:true,
                message:'Unable to Update category list',
                statusCode: 400,
                data: result
              };
              return reply({
               edc : commonfun.encrypt(JSON.stringify(response))
              });
              console.log(err)
            })
    },
}