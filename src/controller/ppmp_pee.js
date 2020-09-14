const commonfun = require('../libraries/commonfunction');
const userquery = require('../libraries/userquery');
// const det_equ = require('../../models/Details_equipment');
const ppmp_pee = require('../models/ppmp_pee');
var dateFormat = require('dateformat');
const Joi = require("joi");
exports.insert_ppmp_pee = {
    // method: 'POST',
    // path: '/plant_equip_tool_insert',
    validate: {
        payload: {
            // pmpppeeId: Joi.number().required(),
            ptw_ref_id: Joi.string().required(),
            ptw_id: Joi.number().required(),
            factor: Joi.string().required(),
            otimalrange: Joi.string().required(),
            initalreading: Joi.string().required(),
            controls: Joi.string().required(),
            responsibility: Joi.string().required(),
            workdone: Joi.boolean().required(),
            addons: Joi.string().required(),
            remark: Joi.string().required(),
            createdBy:Joi.string().required()
        }
    },
    handler: async function (request, reply) {
        console.log("entered to insert ptw_plant");
        let data = {
            ptw_ref_id: request.payload.ptw_ref_id,
            ptw_id: request.payload.ptw_id,
            factor: request.payload.factor,
            otimalrange: request.payload.otimalrange,
            initalreading: request.payload.initalreading,
            controls: request.payload.controls,
            responsibility: request.payload.responsibility,
            workdone: request.payload.workdone,
            addons: request.payload.addons,
            remark: request.payload.remark,
            createdBy:request.payload.createdBy,
            createdAt: dateFormat(new Date(), 'yyyy-mm-dd_HH-MM'),
            updatedAt: dateFormat(new Date(), 'yyyy-mm-dd_HH-MM')
        };
        console.log("data", data);
        commonfun.insertTable(ppmp_pee, data).then(res => {
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


exports.get_ppmp_pee = {
    handler: async function (request, reply) {
        console.log("entered to select equipment");

        console.log("params", request.params);
        let where = "";
        if (request.params.pmpppeeId) {
            console.log("if");
            where = "pmpppeeId=" + request.params.pmpppeeId
        } else {
            console.log("else");
            where = true
        }

        let allData = {
            selectList: '*',
            where: where.toString()
        }
        commonfun.commonSelectQuery(ppmp_pee, null, allData).then((res
        ) => {
            console.log("res", res);
            let response = {
                statusCode: 200,
                error: false,
                success: true,
                message: "List of meterial details",
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
                message: "can not find meterial details",
                data: err
            }
            return reply(response);
            return reply({edc: commonfun.encrypt(JSON.stringify(response))});
        });

    }
};


exports.update_ppmp_pee = {
    validate: {
        payload: {
            pmpppeeId: Joi.number().required(),
            ptw_ref_id: Joi.string().required(),
            ptw_id: Joi.number().required(),
            factor: Joi.string().required(),
            otimalrange: Joi.string().required(),
            initalreading: Joi.string().required(),
            controls: Joi.string().required(),
            responsibility: Joi.string().required(),
            workdone: Joi.boolean().required(),
            addons: Joi.string().required(),
            remark: Joi.string().required(),
            createdBy:Joi.string().required()
        }
    },
    handler: async function (request, reply) {
        console.log("entered to update insert");
        let column = {
            pmpppeeId: request.payload.pmpppeeId,
            ptw_ref_id: request.payload.ptw_ref_id,
            ptw_id: request.payload.ptw_id,
            factor: request.payload.factor,
            otimalrange: request.payload.otimalrange,
            initalreading: request.payload.initalreading,
            controls: request.payload.controls,
            responsibility: request.payload.responsibility,
            workdone: request.payload.workdone,
            addons: request.payload.addons,
            remark: request.payload.remark,
            createdBy:request.payload.createdBy,
            createdAt: dateFormat(new Date(), 'yyyy-mm-dd_HH-MM'),
            updatedAt: dateFormat(new Date(), 'yyyy-mm-dd_HH-MM')
        }
        let where = {
            pmpppeeId: request.payload.pmpppeeId
        };
        userquery.updatemultiple(ppmp_pee, column, where).then((res
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
