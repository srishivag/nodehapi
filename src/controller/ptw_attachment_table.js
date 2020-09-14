const commonfun = require('../libraries/commonfunction');
const userquery = require('../libraries/userquery');
const Joi = require("joi");
const attachment = require('../models/ptw_attachment_table');
var dateFormat = require('dateformat');

exports.postattachment_table = {

    validate: {
        payload: {
          ptw_id: Joi.number().required(),
          ptw_ref_id: Joi.string().required(),
          doc_path: Joi.string().required(),
          file_name: Joi.string().required(),
          doc_type: Joi.number().required(),
          doc_method: Joi.boolean().required(),
          status: Joi.boolean().required(),
       
        }
      },
      handler: async function (request, reply) {
        let res = {
          ptw_id: request.payload.ptw_id,
          ptw_ref_id: request.payload.ptw_ref_id,
          doc_path: request.payload.doc_path,
          file_name: request.payload.file_name,
          doc_type: request.payload.doc_type,
          doc_method: request.payload.doc_method,
          status: request.payload.status,
          createdAt: dateFormat(new Date(), 'yyyy-mm-dd_HH-MM'),
          updatedAt: dateFormat(new Date(), 'yyyy-mm-dd_HH-MM')

        
        };
        commonfun.insertTable(attachment, res).then((res,
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

exports.Getattachment_table = {
  handler: async function (request, reply) {
    // console.log(request.params)
    // console.log(request.params.ptw_id)
    let allData={
      selectList: '*',
      where:`at_id=${request.params.at_id}`
    }
  //  console.log('aruna',allData);
    await commonfun.commonSelectQuery(attachment, null, allData)
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
          message:'Unable to fetch attachment table data',
          statusCode: 400,
          data: result
        };
        return reply({
          edc : commonfun.encrypt(JSON.stringify(response))
        });

      });
  }
}


exports.updateDetails = {
  validate: {
      payload: {
        at_id: Joi.number().required(),
        ptw_id: Joi.number().required(),
        ptw_ref_id: Joi.string().required(),
        doc_path: Joi.string().required(),
        file_name: Joi.string().required(),
        doc_type: Joi.number().required(),
        doc_method: Joi.boolean().required(),
        status: Joi.boolean().required(),
      }
  },
  handler: function (request, reply) {
      var at_id = request.payload.at_id
      var ptw_id = request.payload.ptw_id
      var ptw_ref_id = request.payload.ptw_ref_id
      var doc_path = request.payload.doc_path
      var file_name = request.payload.file_name
      var doc_type = request.payload.doc_type
      var doc_method = request.payload.doc_method
      var status = request.payload.status
      var updatedAt = dateFormat(new Date(), 'yyyy-mm-dd_HH-MM')
      const colname = {
        ptw_id: ptw_id,
        ptw_ref_id: ptw_ref_id,
        doc_path: doc_path,
        file_name: file_name,
        doc_type: doc_type,
        doc_method: doc_method,
        status: status,
        updatedAt: updatedAt
      };
      const condkey = {
        at_id: at_id
      }
          userquery.updatemultiple(attachment, colname, condkey).then(result => {
            if (result) {
              let response = {
                success:true,
                error:false,
                message:'Updated the ptw attachment table data',
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
         //   console.log(err)
          })
  },
}