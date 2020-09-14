const commonfun = require('../libraries/commonfunction');
const userquery = require('../libraries/userquery');
// const det_equ = require('../../models/Details_equipment');
const ppmp_ea = require('../models/ppmp_ea');
var dateFormat = require('dateformat');
const Joi = require("joi");
exports.insert_ppmp_ea = {
    // method: 'POST',
    // path: '/plant_equip_tool_insert',
    validate: {
        payload: {

            // ppmp_eaid: Joi.number().required(),
            ptw_ref_id: Joi.string().required(),
            ptw_id: Joi.number().required(),
            equipmentId: Joi.number().required(),
            location: Joi.string().required(),
            distance: Joi.string().required(),
            type: Joi.string().required(),
            status: Joi.string().required(),
            // lastinspectiondate:Joi.string().required(),
            responsibility: Joi.string().required(),
            adequate: Joi.boolean().required(),
            addons: Joi.string().required(),
            spare1: Joi.string().required(),
            remark: Joi.string().required(),
            createdBy: Joi.string().required()
        }
    },
    handler: async function (request, reply) {
        console.log("entered to insert ptw_plant");
        let data = {
            ptw_ref_id: request.payload.ptw_ref_id,
            ptw_id: request.payload.ptw_id,
            equipmentId: request.payload.equipmentId,
            location: request.payload.location,
            distance: request.payload.distance,
            type: request.payload.type,
            status: request.payload.status,
            lastinspectiondate: dateFormat(new Date(), 'yyyy-mm-dd_HH-MM'),
            responsibility: request.payload.responsibility,
            adequate: request.payload.adequate,
            addons: request.payload.addons,
            spare1: request.payload.spare1,
            remark: request.payload.remark,
            createdBy: request.payload.createdBy,
            createdAt: dateFormat(new Date(), 'yyyy-mm-dd_HH-MM'),
            updatedAt: dateFormat(new Date(), 'yyyy-mm-dd_HH-MM')
        };
        console.log("dataaa", data);
        commonfun.insertTable(ppmp_ea, data).then(res => {
            let response = {
                statusCode: 200,
                error: false,
                success: true,
                message: "inserted successfully",
                data: res
            }
            return reply(response);
            return reply({edc: commonfun.encrypt(JSON.stringify(response))});
        }).catch(err => {
            let response = {
                statusCode: 200,
                error: true,
                success: false,
                message: "can't insert data",
                err: err
            }
            return reply(response);

            return reply({edc: commonfun.encrypt(JSON.stringify(response))});


        })

    }
};


exports.get_ppmp_ea = {
    handler: async function (request, reply) {
        console.log("entered to select equipment");

        console.log("params", request.params);
        let where = "";
        if (request.params.ppmp_eaid) {
            console.log("if");
            where = "ppmp_eaid=" + request.params.ppmp_eaid
        } else {
            console.log("else");
            where = true
        }
        let allData = {
            selectList: '*',
            where: where.toString()
        }
        commonfun.commonSelectQuery(ppmp_ea, null, allData).then((res
        ) => {
            console.log("res", res);
            let response = {
                statusCode: 200,
                error: false,
                success: true,
                message: "List of documents",
                data: res
            }
            return reply(response);
            return reply({edc: commonfun.encrypt(JSON.stringify(response))});
        }).catch(err => {
            console.log(err);
            let response = {
                statusCode: 400,
                error: true,
                success: false,
                message: "can not find any docs",
                data: err
            }
            return reply(response);
            return reply({edc: commonfun.encrypt(JSON.stringify(response))});
        });

    }
};


exports.update_ppmp_ea = {
    validate: {
        payload: {
            ppmp_eaid: Joi.number().required(),
            ptw_ref_id: Joi.string().required(),
            ptw_id: Joi.number().required(),
            equipmentId: Joi.number().required(),
            location: Joi.string().required(),
            distance: Joi.string().required(),
            type: Joi.string().required(),
            status: Joi.string().required(),
            // lastinspectiondate:Joi.string().required(),
            responsibility: Joi.string().required(),
            adequate: Joi.boolean().required(),
            addons: Joi.string().required(),
            spare1: Joi.string().required(),
            remark: Joi.string().required(),
            createdBy: Joi.string().required()
        }
    },
    handler: async function (request, reply) {
        console.log("entered to update insert");
        let column = {
            ptw_ref_id: request.payload.ptw_ref_id,
            ptw_id: request.payload.ptw_id,
            equipmentId: request.payload.equipmentId,
            location: request.payload.location,
            distance: request.payload.distance,
            type: request.payload.type,
            status: request.payload.status,
            lastinspectiondate: dateFormat(new Date(), 'yyyy-mm-dd_HH-MM'),
            responsibility: request.payload.responsibility,
            adequate: request.payload.adequate,
            addons: request.payload.addons,
            spare1: request.payload.spare1,
            remark: request.payload.remark,
            createdBy: request.payload.createdBy,
            // createdAt: dateFormat(new Date(), 'yyyy-mm-dd_HH-MM'),
            updatedAt: dateFormat(new Date(), 'yyyy-mm-dd_HH-MM')
        }
        let where = {
            ppmp_eaid: request.payload.ppmp_eaid
        };
        userquery.updatemultiple(ppmp_ea, column, where).then((res
        ) => {
            console.log("res", res);
            let response = {
                statusCode: 200,
                error: false,
                success: true,
                message: "updated Successfully",
                data: res
            }
            return reply(response);
            return reply({edc: commonfun.encrypt(JSON.stringify(response))});

        }).catch(err => {
            console.log(err);
            let response = {
                statusCode: 400,
                error: true,
                success: false,
                message: "can't update values",
                data: err
            }
            return reply(response);
            return reply({edc: commonfun.encrypt(JSON.stringify(response))});
        });

    }
};
