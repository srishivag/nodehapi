
var Joi = require('joi');
var common = require('../libraries/commonfunction.js');
var input = require('../models/ptw_manpower_table');
var userquery = require('../libraries/userquery.js');
var dateFormat = require('dateformat');
//  insert operation
exports.ptw_manpower_insert = {
  validate: {
    payload: {
        pm_id: Joi.number().required(),
        ptw_ref_id: Joi.string().required(),
        ptw_id: Joi.number().required(),
        type: Joi.number().required(),
        categories: Joi.string().required(),
        number: Joi.number().required(),
        status: Joi.boolean().required()
    }
  },
  handler: function (request, reply) {
    let data = {
        pm_id: request.payload.pm_id,
        ptw_ref_id: request.payload.ptw_ref_id,
        ptw_id: request.payload.ptw_id,
        type: request.payload.type,
        categories: request.payload.categories,
        number: request.payload.number,
        status: request.payload.status,
        createdAt: dateFormat(new Date(), 'yyyy-mm-dd_HH-MM'),
        updaatedAt:dateFormat(new Date(), 'yyyy-mm-dd_HH-MM'),
    }
    common.insertTable(input, data).then((err, res) => {
      // function (err, res) {
      if (err) {
        var response= {
          statusCode: 200,
          error: true,
          message: err.sqlMessage,
          data: null
        }
        return reply({edc: common.encrypt(JSON.stringify(response))});
      }
      else {
        var response= {
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
exports.ptw_manpower_select = {
    handler: function (request, reply) {
      console.log("enter to this route")
      let where = "pm_id=" + request.params.id
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
          var response= {
            statusCode: 200,
            error: false,
            success: true,
            data: result,
          }
          return reply({edc: common.encrypt(JSON.stringify(response))});
          
        }).catch(err => {
          console.log("error ", err);
         var response = {
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
exports.ptw_manpower = {
    validate: {
        payload: {
            pm_id: Joi.number().required(),
            ptw_ref_id: Joi.string().required(),
            ptw_id: Joi.number().required(),
            type: Joi.number().required(),
            categories: Joi.string().required(),
            number: Joi.number().required(),
            status: Joi.boolean().required()
        }
      },
    handler: function (request, reply) {
        console.log("update route");
        let pm_id= request.payload.pm_id
        let ptw_ref_id= request.payload.ptw_ref_id
        let ptw_id=request.payload.ptw_id
        let type= request.payload.type
        let categories= request.payload.categories
        let number= request.payload.number
        let status= request.payload.status
        let updaatedAt=dateFormat(new Date(), 'yyyy-mm-dd_HH-MM')
       const colname = {
        // pm_id: pm_id,
        ptw_ref_id: ptw_ref_id,
        ptw_id: ptw_id,
        type: type,
        categories:categories,
        number:number,
        status:status,
        updaatedAt:updaatedAt
      };
      const condkey = {
        pm_id: pm_id
      }
      console.log(colname,condkey)
      userquery.updatemultiple(input, colname, condkey).then(result=> {
        console.log("update multiple");
        // if (result) {
          var response ={
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
       var response = {
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