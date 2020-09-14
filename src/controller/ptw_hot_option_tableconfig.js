var jwt = require('jsonwebtoken');
var Joi = require('joi');
var md5 = require('md5');
var db = require('../config/db');
var common = require('../libraries/commonfunction.js');
var input = require('../models/ptw_hot_option_table.js');
var userquery = require('../libraries/userquery.js');
var dateFormat = require('dateformat');
var dateFormat = require('dateformat');
//  insert operation
exports.ptw_cold = {
  validate: {
    payload: {
      hpt_id: Joi.number().required(),
      option_name: Joi.string().required(),
      status: Joi.boolean().required(),
      createdAt: dateFormat(new Date(), 'yyyy-mm-dd_HH-MM'),
     
    }
  },
  handler: function (request, reply) {
    let data = {
      hpt_id: request.payload.hpt_id,
      option_name: request.payload.option_name,
      status: request.payload.status,
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
exports.ptw_cold_select = {
  handler: function (request, reply) {
    console.log("enter to this route")
    let where = "hpt_id=" + request.params.id
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
exports.ptw_cold_update = {
  validate: {
    payload: {
      hpt_id: Joi.number().required(),
      option_name: Joi.string().required(),
      status: Joi.boolean().required(),
    }
  },
  handler: function (request, reply) {
    var hpt_id = request.payload.hpt_id
    var option_name = request.payload.option_name
    var status = request.payload.status
     
    const colname = {
      hpt_id: hpt_id,
      option_name: option_name,
      status: status,
    };
    const condkey = {
      hpt_id: hpt_id
    }
    userquery.updatemultiple(input, colname, condkey).then((result) => {
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

