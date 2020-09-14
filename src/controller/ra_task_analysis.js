const commonfun = require('../libraries/commonfunction');
// const det_equ = require('../../models/Details_equipment');
const ra_taskanls = require('../models/Ra_task_analysis');
var dateFormat = require('dateformat');
const userquery = require('../libraries/userquery');
const Joi = require("joi");
exports.insert_task_an = {
    // method: 'POST',
    // path: '/plant_equip_tool_insert',
    validate: {
        payload: {
            ra_ref_no: Joi.string().required(),
            ra_id: Joi.number().required(),
            rastep:Joi.number().required(),
            status:Joi.string().required(),
            createdBy:Joi.number().required()
        }
    },
    handler: async function (request, reply) {
        console.log("entered to insert_task_an insert");
        // return reply({
        //     status:"ok"
        // })
        let data = {
            ra_ref_no: request.payload.ra_ref_no,
            ra_id: request.payload.ra_id,
            rastep:request.payload.rastep,
            status:request.payload.status,
            createdBy:request.payload.createdBy,
            createdAt: dateFormat(new Date(), 'yyyy-mm-dd_HH-MM'),
            updatedAt: dateFormat(new Date(), 'yyyy-mm-dd_HH-MM')
        };
        commonfun.insertTable(ra_taskanls, data).then(res => {

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


exports.fetch_task_an = {
    handler: async function (request, reply) {

        let where = "task_id=" + request.params.task_id
        let allData = {
            selectList: '*',
            where: where.toString()
        }
        commonfun.commonSelectQuery(ra_taskanls, null, allData).then((res
        ) => {
            console.log("res", res);
            let response = {
                statusCode: 200,
                error: false,
                success: true,
                message: "Get task analysis List ",
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

exports.update_task_an = {
    validate: {
        payload: {
            task_id: Joi.number().required(),
            ra_ref_no: Joi.string().required(),
            ra_id: Joi.number().required(),
            rastep: Joi.string().required(),
            status:Joi.string().required(),
            createdBy:Joi.string().required()
        }
    },
    handler: async function (request, reply) {
        let column = {
            ra_ref_no: request.payload.ra_ref_no,
            ra_id:request.payload.ra_id,
            rastep: request.payload.rastep,
            status:request.payload.status,
            createdBy:request.payload.createdBy,
            updatedAt:dateFormat(new Date(), 'yyyy-mm-dd_HH-MM')
        }
        console.log("id", request.payload.task_id);
        let where = {
            task_id: request.payload.task_id
        };

        userquery.updatemultiple(ra_taskanls, column, where).then((res
        ) => {
            console.log("res", res);
            let response = {
                statusCode: 200,
                error: false,
                success: true,
                message: "Ra task analysis updated successfully",
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
                message: "unable to update Ra task analysis",
                data: err
            }
            // return reply(response);
            return reply({edc: commonfun.encrypt(JSON.stringify(response))});
        });

    }
};