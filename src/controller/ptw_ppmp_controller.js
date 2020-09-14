const commonfun = require('../libraries/commonfunction');
// const det_equ = require('../../models/Details_equipment');
const ptw_ppmp_model = require('../models/ptw_ppmp_model');
var dateFormat = require('dateformat');
const userquery = require('../libraries/userquery');
const Joi = require("joi");
exports.insert_ptw_ppmp = {
    // method: 'POST',
    // path: '/plant_equip_tool_insert',
    validate: {
        payload: {
            ptw_ref_id: Joi.string().required(),
            ptw_id: Joi.number().required(),
            emp_id: Joi.string().required(),
            role_for_wp: Joi.number().required(),
            remarks: Joi.string().required(),
            competent: Joi.string().required(),
            fit_for_purpose: Joi.string().required(),
            createdBy:Joi.string().required(),
            adons: Joi.string().required()
        }
    },
    handler: async function (request, reply) {
        console.log("entered to insert ptw_plant")
        let data = {
            ptw_ref_id: request.payload.ptw_ref_id,
            ptw_id: request.payload.ptw_id,
            emp_id: request.payload.emp_id,
            role_for_wp: request.payload.role_for_wp,
            remarks: request.payload.remarks,
            competent: request.payload.competent,
            fit_for_purpose: request.payload.fit_for_purpose,
            adons: request.payload.adons,
            createdBy:request.payload.createdBy,
            createdAt: dateFormat(new Date(), 'yyyy-mm-dd_HH-MM'),
            updatedAt: dateFormat(new Date(), 'yyyy-mm-dd_HH-MM')
        };
        console.log(data);
        commonfun.insertTable(ptw_ppmp_model, data).then(res => {
            let response={
                statusCode: 200,
                error: false,
                success: true,
                message: "inserted successfully",
                data: res,
            }
            // return reply(response);
            return reply({edc: commonfun.encrypt(JSON.stringify(response))});
        }).catch(err => {
            let response={
                statusCode: 200,
                error: true,
                success: false,
                message: "can't insert data",
                err: err,
            }
            // return reply(response);
            return reply({edc: commonfun.encrypt(JSON.stringify(response))});
        })

    }
};


exports.get_ptw_ppmp = {
    handler: async function (request, reply) {

        let where = "ppmp_id=" + request.params.ppmp_id
        let allData = {
            selectList: '*',
            where: where.toString()
        }
        commonfun.commonSelectQuery(ptw_ppmp_model, null, allData).then((res
        ) => {
            console.log("res", res);
            let response={
                statusCode: 200,
                error: false,
                success: true,
                message: "ppmp list",
                data: res,
            }
            // return reply(response);
            return reply({edc: commonfun.encrypt(JSON.stringify(response))});

        }).catch(err => {
            console.log(err);
            let response={
                statusCode: 400,
                error: true,
                success: false,
                message: "can't find list",
                data: err,
            }
            // return reply(response);
            return reply({edc: commonfun.encrypt(JSON.stringify(response))});
        });

    }
};


exports.update_ptw_ppmp = {
    validate: {
        payload: {
            ppmp_id: Joi.number().required(),
            ptw_ref_id: Joi.string().required(),
            ptw_id: Joi.number().required(),
            emp_id: Joi.string().required(),
            role_for_wp: Joi.number().required(),
            remarks: Joi.string().required(),
            competent: Joi.string().required(),
            fit_for_purpose: Joi.string().required(),
            adons: Joi.string().required(),
            createdBy:Joi.string().required()
        }
    },
    handler: async function (request, reply) {
        let column = {
            ptw_ref_id: request.payload.ptw_ref_id,
            ptw_id: request.payload.ptw_id,
            emp_id: request.payload.emp_id,
            role_for_wp: request.payload.role_for_wp,
            remarks: request.payload.remarks,
            competent: request.payload.competent,
            fit_for_purpose: request.payload.fit_for_purpose,
            adons: request.payload.adons,
            createdBy:request.payload.createdBy,
            createdAt: dateFormat(new Date(), 'yyyy-mm-dd_HH-MM'),
            updatedAt: dateFormat(new Date(), 'yyyy-mm-dd_HH-MM')
        }
        let where = {
            ppmp_id: request.payload.ppmp_id
        };
        userquery.updatemultiple(ptw_ppmp_model, column, where).then((res
        ) => {
            console.log("res", res);
            let response={
                statusCode: 200,
                error: false,
                success: true,
                message: "updated successfully",
                data: res,
            }
            // return reply(response);
            return reply({edc: commonfun.encrypt(JSON.stringify(response))});
            // }
        }).catch(err => {
            console.log(err);
            let response={
                statusCode: 400,
                error: true,
                success: false,
                message: "can't update",
                data: err,
            }
            // return reply(response);
            return reply({edc: commonfun.encrypt(JSON.stringify(response))});
        });

    }
};




