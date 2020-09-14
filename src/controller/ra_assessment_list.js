const commonfun = require('../libraries/commonfunction');
// const det_equ = require('../../models/Details_equipment');
const ra_ass_list = require('../models/Ra_assessment_list');
var dateFormat = require('dateformat');
const userquery = require('../libraries/userquery');
const Joi = require("joi");
exports.insert_asslist = {
    // method: 'POST',
    // path: '/plant_equip_tool_insert',
    validate: {
        payload: {
            ra_ref_no: Joi.string().required(),
            ra_id: Joi.number().required(),
            emp_id: Joi.string().required(),
            ra_role: Joi.string().required(),
            createdBy:Joi.string().required()
        }
    },
    handler: async function (request, reply) {
        console.log("entered to insert_asslist insert");
        // return reply({
        //     status:"ok"
        // })
        let data = {
            ra_ref_no: request.payload.ra_ref_no,
            ra_id: request.payload.ra_id,
            emp_id: request.payload.emp_id,
            ra_role: request.payload.ra_role,
            createdBy:request.payload.createdBy,
            createdAt: dateFormat(new Date(), 'yyyy-mm-dd_HH-MM'),
            updaatedAt: dateFormat(new Date(), 'yyyy-mm-dd_HH-MM')

        };
        commonfun.insertTable(ra_ass_list, data).then(res => {

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


exports.fetch_asslist = {
    handler: async function (request, reply) {

        let where = "ra_assessment_id=" + request.params.ra_assessment_id
        let allData = {
            selectList: '*',
            where: where.toString()
        }
        commonfun.commonSelectQuery(ra_ass_list, null, allData).then((res
        ) => {
            console.log("res", res);
            let response = {
                statusCode: 200,
                error: false,
                success: true,
                message: "Get assessment List ",
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


exports.update_asslist = {
    validate: {
        payload: {
            ra_ass_id: Joi.number().required(),
            ra_ref_no: Joi.string().required(),
            ra_id: Joi.number().required(),
            emp_id: Joi.string().required(),
            ra_role: Joi.string().required(),
            createdBy:Joi.string().required()
        }
    },
    handler: async function (request, reply) {
        let column = {
            ra_ref_no: request.payload.ra_ref_no,
            ra_id: request.payload.ra_id,
            emp_id: request.payload.emp_id,
            ra_role: request.payload.ra_role,
            createdBy:request.payload.createdBy,
            updatedAt: dateFormat(new Date(), 'yyyy-mm-dd_HH-MM')
        }
        console.log("id", request.payload.ra_ass_id);
        let where = {
            ra_assessment_id: request.payload.ra_ass_id
        };
        userquery.updatemultiple(ra_ass_list, column, where).then((res
        ) => {
            console.log("res", res);
            let response = {
                statusCode: 200,
                error: false,
                success: true,
                message: "Ra Assessment List updated successfully",
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
                message: "unable to update Ra Assessment list",
                data: err
            }
            // return reply(response);
            return reply({edc: commonfun.encrypt(JSON.stringify(response))});
        });

    }
};
