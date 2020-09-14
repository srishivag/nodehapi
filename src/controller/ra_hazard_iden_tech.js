const commonfun = require('../libraries/commonfunction');
// const det_equ = require('../../models/Details_equipment');
const ra_haz_iden = require('../models/Ra_hazard_identify_tech');
var dateFormat = require('dateformat');
const userquery = require('../libraries/userquery');
const Joi = require("joi");
exports.insert_hazidentech = {
    // method: 'POST',
    // path: '/plant_equip_tool_insert',
    validate: {
        payload: {
            ra_ref_no: Joi.string().required(),
            ra_id: Joi.number().required(),
            ra_risk_tech: Joi.number().required(),
            status:Joi.string().required(),
            createdBy:Joi.number().required()
        }
    },
    handler: async function (request, reply) {
        console.log("entered to insert_hazidentech insert");
        // return reply({
        //     status:"ok"
        // })
        let data = {
            ra_ref_no: request.payload.ra_ref_no,
            ra_id: request.payload.ra_id,
            ra_risk_techinque: request.payload.ra_risk_tech,
            status:request.payload.status,
            createdBy:request.payload.createdBy,
            createdAt: dateFormat(new Date(), 'yyyy-mm-dd_HH-MM'),
            updatedAt: dateFormat(new Date(), 'yyyy-mm-dd_HH-MM')

        };
        commonfun.insertTable(ra_haz_iden, data).then(res => {

            var response = {
                statusCode: 200,
                error: false,
                success: true,
                message: "saved successfully",
                data: res
            }
            // return reply(response);
            return reply({edc: commonfun.encrypt(JSON.stringify(response))});
        }).catch(err => {

            var response = {
                statusCode: 500,
                error: true,
                success: false,
                message: "can't save data",
                data: err
            }
            // return reply(response);
            return reply({edc: commonfun.encrypt(JSON.stringify(response))});
        })

    }
};


exports.fetch_hazidentech = {
    handler: async function (request, reply) {

        let where = "hazidentech=" + request.params.hazidentech
        let allData = {
            selectList: '*',
            where: where.toString()
        }
        commonfun.commonSelectQuery(ra_haz_iden, null, allData).then((res
        ) => {
            console.log("res", res);
            let response = {
                statusCode: 200,
                error: false,
                success: true,
                message: "Get hazard identification technology List ",
                data: res
            }
            // return reply(response);
            return reply({edc: commonfun.encrypt(JSON.stringify(response))});

        }).catch(err => {
            console.log(err);
            let response = {
                statusCode: 400,
                error: true,
                success: false,
                message: "can't get list",
                data: err
            }
            // return reply(response);
            return reply({edc: commonfun.encrypt(JSON.stringify(response))});
        });

    }
};


exports.update_hazidentech = {
    validate: {
        payload: {
            hazidentech: Joi.number().required(),
            ra_ref_no: Joi.string().required(),
            ra_id: Joi.number().required(),
            ra_risk_techinque: Joi.number().required(),
            createdBy:Joi.number().required()
        }
    },
    handler: async function (request, reply) {
        let column = {
            ra_ref_no: request.payload.ra_ref_no,
            ra_id: request.payload.ra_id,
            ra_risk_techinque:request.payload.ra_risk_techinque,
            createdBy:request.payload.createdBy,
            updatedAt: dateFormat(new Date(), 'yyyy-mm-dd_HH-MM')
        }
        console.log("id", request.payload.hazidentech);
        let where = {
            hazidentech: request.payload.hazidentech
        };

        userquery.updatemultiple(ra_haz_iden, column, where).then((res
        ) => {
            console.log("res", res);
            let response = {
                statusCode: 200,
                error: false,
                success: true,
                message: "Ra hazard identification updated successfully",
                data: res
            }
            // return reply(response);
            return reply({edc: commonfun.encrypt(JSON.stringify(response))});
            // }
        }).catch(err => {
            console.log(err);
            let response = {
                statusCode: 400,
                error: true,
                success: false,
                message: "unable to update Ra hazard identification",
                data: err
            }
            // return reply(response);
            return reply({edc: commonfun.encrypt(JSON.stringify(response))});
        });

    }
};
