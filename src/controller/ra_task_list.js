const commonfun = require('../libraries/commonfunction');
// const det_equ = require('../../models/Details_equipment');
const ra_tasklist = require('../models/Ra_task_list');
var dateFormat = require('dateformat');
const userquery = require('../libraries/userquery');
const Joi = require("joi");
exports.insert_task_list = {
    // method: 'POST',
    // path: '/plant_equip_tool_insert',
    validate: {
        payload: {
            taskname: Joi.string().required(),
            status:Joi.string().required()
        }
    },
    handler: async function (request, reply) {
        console.log("entered to insert_task_list insert");
        // return reply({
        //     status:"ok"
        // })
        let data = {
            taskname: request.payload.taskname,
            status:request.payload.status,
            createdAt: dateFormat(new Date(), 'yyyy-mm-dd_HH-MM'),
            updatedAt: dateFormat(new Date(), 'yyyy-mm-dd_HH-MM'),
        };
        commonfun.insertTable(ra_tasklist, data).then(res => {

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


exports.fetch_task_list = {
    handler: async function (request, reply) {

        let where = "tasklistId=" + request.params.tasklistId
        let allData = {
            selectList: '*',
            where: where.toString()
        }
        commonfun.commonSelectQuery(ra_tasklist, null, allData).then((res
        ) => {
            console.log("res", res);
            let response = {
                statusCode: 200,
                error: false,
                success: true,
                message: "Get task List ",
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

exports.update_task_list = {
    validate: {
        payload: {
            tasklistId: Joi.number().required(),
            taskname: Joi.string().required(),
            status:Joi.string().required()
        }
    },
    handler: async function (request, reply) {
        let column = {
            taskname: request.payload.taskname,
            status:request.payload.status,
            updatedAt:dateFormat(new Date(), 'yyyy-mm-dd_HH-MM'),
        }
        console.log("id", request.payload.tasklistId);
        let where = {
            tasklistId: request.payload.tasklistId
        };

        userquery.updatemultiple(ra_tasklist, column, where).then((res
        ) => {
            console.log("res", res);
            let response = {
                statusCode: 200,
                error: false,
                success: true,
                message: "Ra task list updated successfully",
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
                message: "unable to update Ra task list",
                data: err
            }
            // return reply(response);
            return reply({edc: commonfun.encrypt(JSON.stringify(response))});
        });

    }
};