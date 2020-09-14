var Joi = require('joi');
var common = require('../libraries/commonfunction.js');
var input = require('../models/ptw_mcs.js');
var userquery = require('../libraries/userquery.js');
var dateFormat = require('dateformat');

//  insert operation
exports.ptw_mcs_insert = {
    validate: {
      payload: {
        mcs_id: Joi.number().required(),
        ptw_ref_id: Joi.string().required(),
        ptw_id: Joi.number().required(),
        elementid: Joi.number().required(),
        quantity: Joi.number().required(),
        createdAt: Joi.string().required(),
        updatedAt: Joi.string().required(),
      }
    },
    handler: function (request, reply) {
      let data = {
          mcs_id: request.payload.mcs_id,
          ptw_ref_id: request.payload.ptw_ref_id,
          ptw_id: request.payload.ptw_id,
          elementid: request.payload.elementid,
          quantity: request.payload.quantity,
          createdAt: dateFormat(new Date(), 'yyyy-mm-dd_HH-MM'),
          updatedAt:dateFormat(new Date(), 'yyyy-mm-dd_HH-MM'),
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
exports.ptw_mcs_select = {
    handler: function (request, reply) {
      console.log("enter to this route")
      let where = "mcs_id=" + request.params.id
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
exports.ptw_mcs_update = {
    validate: {
        payload: {
            mcs_id: Joi.number().required(),
            ptw_ref_id: Joi.string().required(),
            ptw_id: Joi.number().required(),
            elementid: Joi.number().required(),
            quantity: Joi.number().required(),
        }
      },
    handler: function (request, reply) {
        console.log("update route");
        let mcs_id= request.payload.mcs_id
        let ptw_ref_id= request.payload.ptw_ref_id
        let ptw_id= request.payload.ptw_id
        let elementid=request.payload.elementid
        let quantity= request.payload.quantity
        let updatedAt=dateFormat(new Date(), 'yyyy-mm-dd_HH-MM')

        const colname = {
        // mcs_id: mcs_id,
        ptw_ref_id: ptw_ref_id,
        ptw_id: ptw_id,
        elementid:elementid,
        quantity:quantity,
        updatedAt:updatedAt
      };
      const condkey = {
        mcs_id: mcs_id,
      }
      console.log(colname,condkey)
      userquery.updatemultiple(input, colname, condkey).then(result=> {
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
        var response= {
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
