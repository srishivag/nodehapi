const commonfun = require('../libraries/commonfunction');
// const det_equ = require('../../models/Details_equipment');
const ra_taskhaz = require('../models/Ra_task_hazard');
var dateFormat = require('dateformat');
const userquery = require('../libraries/userquery');
const Joi = require("joi");
exports.insert_task_haz = {
    // method: 'POST',
    // path: '/plant_equip_tool_insert',
    validate: {
        payload: {
            ra_ref_no: Joi.string().required(),
            ra_id: Joi.number().required(),
            hazard:Joi.string().required(),
            status:Joi.string().required(),
            createdBy:Joi.number().required()
        }
    },
    handler: async function (request, reply) {
        console.log("entered to insert_task_haz insert");
        // return reply({
        //     status:"ok"
        // })
        let data = {
            ra_ref_no: request.payload.ra_ref_no,
            ra_id: request.payload.ra_id,
            hazard:request.payload.hazard,
            status:request.payload.status,
            createdAt: dateFormat(new Date(), 'yyyy-mm-dd_HH-MM'),
            updatedAt: dateFormat(new Date(), 'yyyy-mm-dd_HH-MM'),
            createdBy:request.payload.createdBy,
        };
        commonfun.insertTable(ra_taskhaz, data).then(res => {

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


exports.fetch_task_haz = {
    handler: async function (request, reply) {

        let where = "taskhazId=" + request.params.taskhazId
        let allData = {
            selectList: '*',
            where: where.toString()
        }
        commonfun.commonSelectQuery(ra_taskhaz, null, allData).then((res
        ) => {
            console.log("res", res);
            let response = {
                statusCode: 200,
                error: false,
                success: true,
                message: "Get task hazard List ",
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

exports.update_task_haz = {
    validate: {
        payload: {
            taskhazId: Joi.number().required(),
            ra_ref_no: Joi.string().required(),
            ra_id: Joi.number().required(),
            hazard: Joi.string().required(),
            status:Joi.string().required(),
            createdBy:Joi.string().required()
        }
    },
    handler: async function (request, reply) {
        let column = {
            ra_ref_no: request.payload.ra_ref_no,
            ra_id:request.payload.ra_id,
            hazard: request.payload.hazard,
            status:request.payload.status,
            updatedAt:dateFormat(new Date(), 'yyyy-mm-dd_HH-MM'),
            createdBy:request.payload.createdBy
        }
        console.log("id", request.payload.taskhazId);
        let where = {
            taskhazId: request.payload.taskhazId
        };

        userquery.updatemultiple(ra_taskhaz, column, where).then((res
        ) => {
            console.log("res", res);
            let response = {
                statusCode: 200,
                error: false,
                success: true,
                message: "Ra task hazard updated successfully",
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
                message: "unable to update Ra task hazard",
                data: err
            }
            // return reply(response);
            return reply({edc: commonfun.encrypt(JSON.stringify(response))});
        });

    }
};