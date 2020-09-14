const commonfun = require('../libraries/commonfunction');
// const det_equ = require('../../models/Details_equipment');
const ra_ass_ref_list = require('../models/Ra_assessment_ref_list');
var dateFormat = require('dateformat');
const userquery = require('../libraries/userquery');
const Joi = require("joi");
exports.insert_assreflist = {
    // method: 'POST',
    // path: '/plant_equip_tool_insert',
    validate: {
        payload: {
            ra_ref_no: Joi.string().required(),
            ra_id: Joi.number().required(),
            temp_ref_no: Joi.string().required(),
            createdBy:Joi.number().required(),
        }
    },
    handler: async function (request, reply) {
        console.log("entered to insert_assreflist insert");
        // return reply({
        //     status:"ok"
        // })
        let data = {
            ra_ref_no: request.payload.ra_ref_no,
            ra_id: request.payload.ra_id,
            temp_ref_no: request.payload.temp_ref_no,
            createdBy:request.payload.createdBy,
            createdAt: dateFormat(new Date(), 'yyyy-mm-dd_HH-MM'),
            updatedAt: dateFormat(new Date(), 'yyyy-mm-dd_HH-MM')

        };
        commonfun.insertTable(ra_ass_ref_list, data).then(res => {

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


exports.fetch_assreflist = {
    handler: async function (request, reply) {

        let where = "reflist_id=" + request.params.reflist_id
        let allData = {
            selectList: '*',
            where: where.toString()
        }
        commonfun.commonSelectQuery(ra_ass_ref_list, null, allData).then((res
        ) => {
            console.log("res", res);
            let response = {
                statusCode: 200,
                error: false,
                success: true,
                message: "Get assessment reference List ",
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


exports.update_assreflist = {
    validate: {
        payload: {
            ra_reflist_id: Joi.number().required(),
            ra_ref_no: Joi.string().required(),
            ra_id: Joi.number().required(),
            team_ref_no: Joi.string().required(),
            createdBy:Joi.number().required()
        }
    },
    handler: async function (request, reply) {
        let column = {
            ra_ref_no: request.payload.ra_ref_no,
            ra_id: request.payload.ra_id,
            team_ref_no:request.payload.team_ref_no,
            createdBy:request.payload.createdBy,
            updatedAt: dateFormat(new Date(), 'yyyy-mm-dd_HH-MM')
        }
        console.log("id", request.payload.ra_reflist_id);
        let where = {
            reflist_id: request.payload.ra_reflist_id
        };

        userquery.updatemultiple(ra_ass_ref_list, column, where).then((res
        ) => {
            console.log("res", res);
            let response = {
                statusCode: 200,
                error: false,
                success: true,
                message: "Ra Assessment reference List updated successfully",
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
                message: "unable to update Ra Assessment reference list",
                data: err
            }
            // return reply(response);
            return reply({edc: commonfun.encrypt(JSON.stringify(response))});
        });

    }
};
