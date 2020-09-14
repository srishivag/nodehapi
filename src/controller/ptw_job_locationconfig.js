var jwt = require('jsonwebtoken');
var Joi = require('joi');
var md5 = require('md5');
var db = require('../config/db');
var common = require('../libraries/commonfunction.js');
var input = require("../models/ptw_job_location.js");
var userquery = require('../libraries/userquery.js');
var dateFormat = require('dateformat');

// insert operation
exports.ptw_job = {
    validate: {
        payload: {
            jobloc_id: Joi.number().required(),
            locationname: Joi.string().required(),
            status: Joi.boolean().required(),
            createdAt: Joi.string().required(),
            updatedAt: Joi.string().required()
        }
    },
    handler: function (request, reply) {
       
        console.log("enter the values");
        let data = {
            jobloc_id: request.payload.jobloc_id,
            locationname: request.payload.locationname,
            status: request.payload.status,
            createdAt: dateFormat(new Date(), 'yyyy-mm-dd_HH-MM'),
            updatedAt: dateFormat(new Date(), 'yyyy-mm-dd_HH-MM'),
        }
        common.insertTable(input, data).then((err, res) => {
            // function (err, res) {
            if (err) {
                return reply({
                    statusCode: 200,
                    error: true,
                    message: err.sqlMessage,
                    data: null
                });
            }
            else {
                return reply({
                    statusCode: 200,
                    error: false,
                    message: "Document saved successfully",
                    data: null,
                });
            }
        });
    }
}

//  select operation
exports.ptw_job_select = {
  handler: function (request, reply) {
    console.log("enter to this route")
    let where = "jobloc_id=" + request.params.id
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
        return reply({
          statusCode: 200,
          error: false,
          success: true,
          data: result,
        });
      }).catch(err => {
        console.log("error ", err);
        return reply({
          statusCode: 200,
          error: true,
          success: false,
          data: err,
        });
      });
  }
}


  //update operation
  exports.ptw_job_update = {
    validate: {
      payload: {
        jobloc_id: Joi.number().required(),
        locationname: Joi.string().required(),
        status: Joi.boolean().required(),
        createdAt: Joi.string().required(),
        updatedAt: Joi.string().required(),
      }
    },
    handler: function (request, reply) {
      var jobloc_id = request.payload.jobloc_id
      var locationname = request.payload.locationname
      var status = request.payload.status
      var createdAt = request.payload.createdAt
      var updatedAt = request.payload.updatedAt
        
      const colname = {
        locationname: locationname,
        status: status,
        updatedAt:updatedAt
      };
      const condkey = {
        jobloc_id: jobloc_id
      }
      userquery.updatemultiple(input, colname, condkey).then((result) => {
        console.log("update multiple");
        // if (result) {
          return reply({
            statusCode: 200,
            error: false,
            success: true,
            message: "Update Data",
            data: result,
          });
        // }
      }).catch(err =>{
        console.log(err)
        return reply({
          statusCode: 200,
          error: false,
          success: true,
          message: "not done",
          data: err,
        });
      })
    },
  }