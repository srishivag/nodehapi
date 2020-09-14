var jwt = require('jsonwebtoken');
var Joi = require('joi');
var md5 = require('md5');
var db = require('../config/db');
var common = require('../libraries/commonfunction.js');
var input = require('../models/ptw_hazard_control.js');
var userquery = require('../libraries/userquery.js');
var dateFormat = require('dateformat');
//  insert operation
exports.ptw_hazard_insert = {
    validate: {
        payload: {
            hc_id: Joi.number().required(),
            ptw_ref_id: Joi.string().required(),
            ptw_id: Joi.number().required(),
            hazard_id: Joi.number().required(),
            control_id: Joi.number().required(),
            status: Joi.boolean().required(),
            createdAt: Joi.string().required(),
            updatedAt: Joi.string().required()
        }
    },
    handler: function (request, reply) {
        let data = {
            hc_id: request.payload.hc_id,
            ptw_ref_id: request.payload.ptw_ref_id,
            ptw_id: request.payload.ptw_id,
            hazard_id: request.payload.hazard_id,
            control_id: request.payload.control_id,
            status: request.payload.status,
            createdAt: dateFormat(new Date(), 'yyyy-mm-dd_HH-MM'),
            updatedAt: dateFormat(new Date(), 'yyyy-mm-dd_HH-MM'),
        }
        common.insertTable(input, data).then((err, res) => {
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