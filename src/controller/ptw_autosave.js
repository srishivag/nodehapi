const commonfun = require('../libraries/commonfunction');
const userquery = require('../libraries/userquery');
const Joi = require("joi");
const save = require('../models/ptw_autosave');
var dateFormat = require('dateformat');

exports.postautosave = {

    validate: {
        payload: {
          step: Joi.number().required(),
          data: Joi.string().required(),
          ptw_ref_no: Joi.string().required(),
          ptw_id: Joi.number().required(),
          status: Joi.boolean().required()
       
        }
      },
      handler: async function (request, reply) {
        let res = {
          step: request.payload.step,
          data: request.payload.data,
          ptw_ref_no: request.payload.ptw_ref_no,
          ptw_id: request.payload.ptw_id,
          status: request.payload.status,
          createdAt: dateFormat(new Date(), 'yyyy-mm-dd_HH-MM'),
          updaatedAt: dateFormat(new Date(), 'yyyy-mm-dd_HH-MM')

        
        };
        commonfun.insertTable(save, res).then((res,
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

exports.Getauto_List = {
    handler: async function (request, reply) {
      let allData={
        selectList: '*',
        where:`autoId=${request.params.autoId}`
      }
    //  console.log('aruna',allData);
      await commonfun.commonSelectQuery(save, null, allData)
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
            message:'Unable to fetch autoSave list',
            statusCode: 400,
            data: result
          };
          return reply({
            edc : commonfun.encrypt(JSON.stringify(response))
          });
        });
    }
};

exports.updateautosaveList = {
    validate: {
        payload: {
          autoId: Joi.number().required(),
          step: Joi.number().required(),
          data: Joi.string().required(),
          ptw_ref_no: Joi.string().required(),
          ptw_id: Joi.number().required(),
          status: Joi.boolean().required(),
        }
    },
    handler: function (request, reply) {
        var autoId = request.payload.autoId
        var step = request.payload.step
        var data = request.payload.data
        var ptw_ref_no = request.payload.ptw_ref_no
        var ptw_id = request.payload.ptw_id
        var status = request.payload.status
        var  updaatedAt = dateFormat(new Date(), 'yyyy-mm-dd_HH-MM')
       // const tablemap = attachment;
        const colname = {
            step: step,
            data: data,
            ptw_ref_no: ptw_ref_no,
            ptw_id: ptw_id,
            status: status,
            updaatedAt: updaatedAt
        };
        const condkey = {
            autoId: autoId
        }
            userquery.updatemultiple(save, colname, condkey).then((result) => {
              if (result) {
                let response = {
                  success:true,
                  error:false,
                  message:'Update autosave list',
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