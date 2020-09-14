const commonfun = require('../libraries/commonfunction');
const userquery = require('../libraries/userquery');
// const det_equ = require('../../models/Details_equipment');
const ppmp_meterial_details = require('../models/ppmp_meterial_details');
var dateFormat = require('dateformat');
const Joi = require("joi");
exports.insert_ppmp_meterial_details = {
    // method: 'POST',
    // path: '/plant_equip_tool_insert',
    validate: {
        payload: {
            ptw_ref_id: Joi.string().required(),
            ptw_id: Joi.number().required(),
            elementid: Joi.number().required(),
            nature: Joi.number().required(),
            phase: Joi.number().required(),
            quantity: Joi.number().required(),
            quantityunit: Joi.string().required(),
            container: Joi.string().required(),
            fitforpurpose: Joi.boolean().required(),
            addons: Joi.string().required(),
            remark: Joi.string().required()
        }
    },
    handler: async function (request, reply) {
        console.log("entered to insert ptw_plant");
        let data = {
            ptw_ref_id: request.payload.ptw_ref_id,
            ptw_id: request.payload.ptw_id,
            elementid: request.payload.elementid,
            nature: request.payload.nature,
            phase: request.payload.phase,
            quantity: request.payload.quantity,
            quantityunit: request.payload.quantityunit,
            container: request.payload.container,
            fitforpurpose: request.payload.fitforpurpose,
            addons: request.payload.addons,
            remark: request.payload.remark,
            createdAt: dateFormat(new Date(), 'yyyy-mm-dd_HH-MM'),
            updatedAt: dateFormat(new Date(), 'yyyy-mm-dd_HH-MM')
        };
        console.log("data", data);
        commonfun.insertTable(ppmp_meterial_details, data).then(res => {
            let response = {
                statusCode: 200,
                error: false,
                success: true,
                message: "inserted successfully",
                data: res
            }
            // return reply(response);
            return reply({edc: commonfun.encrypt(JSON.stringify(response))});
        }).catch(err => {
            let response={
                statusCode: 200,
                error: true,
                success: false,
                message: "can't insert data",
                err: err
            }
            // return reply(response);
            return reply({edc: commonfun.encrypt(JSON.stringify(response))});

        })

    }
};


exports.get_ppmp_meterial_details = {
    handler: async function (request, reply) {
        console.log("entered to select equipment");
        // let data = {
        //     ptw_ref_id: request.payload.ptw_ref_id,
        //     ptw_id: request.payload.ptw_id,
        //     assetsrequired: request.payload.assetsrequired,
        //     quantity: request.payload.quantity,
        //     status: request.payload.status,
        //     createdAt:dateFormat(new Date(), 'yyyy-mm-dd_HH-MM'),
        //     updaatedAt: dateFormat(new Date(), 'yyyy-mm-dd_HH-MM')
        //
        // };
        console.log("params", request.params);

        let where = "ppmm_id=" + request.params.ppmm_id
        let allData = {
            selectList: '*',
            where: where.toString()
        }
        commonfun.commonSelectQuery(ppmp_meterial_details, null, allData).then((res
        ) => {
            // if (err) {
            //     console.log(err)
            // } else {
            console.log("res", res);
            let response={
                statusCode: 200,
                error: false,
                success: true,
                message: "List of meterial details",
                data: res
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
                message: "can not find meterial details",
                data: err
            }
            // return reply(response);
            return reply({edc: commonfun.encrypt(JSON.stringify(response))});
        });

    }
};


exports.update_ppmp_meterial_details = {
    validate: {
        payload: {
            ppmm_id: Joi.number().required(),
            ptw_ref_id: Joi.string().required(),
            ptw_id: Joi.number().required(),
            elementid: Joi.number().required(),
            nature: Joi.number().required(),
            phase: Joi.number().required(),
            quantity: Joi.number().required(),
            quantityunit: Joi.string().required(),
            container: Joi.string().required(),
            fitforpurpose: Joi.boolean().required(),
            addons: Joi.string().required(),
            remark: Joi.string().required()
        }
    },
    handler: async function (request, reply) {
        console.log("entered to update insert");
        let column = {
            ptw_ref_id: request.payload.ptw_ref_id,
            ptw_id: request.payload.ptw_id,
            elementid: request.payload.elementid,
            nature: request.payload.nature,
            phase: request.payload.phase,
            quantity: request.payload.quantity,
            quantityunit: request.payload.quantityunit,
            container: request.payload.container,
            fitforpurpose: request.payload.fitforpurpose,
            addons: request.payload.addons,
            remark: request.payload.remark,
            updatedAt: dateFormat(new Date(), 'yyyy-mm-dd_HH-MM')
        }
        console.log("id", request.payload.id);
        let where = {
            ppmm_id: request.payload.ppmm_id
        };
        userquery.updatemultiple(ppmp_meterial_details, column, where).then((res
        ) => {
            console.log("res", res);
            let response={
                statusCode: 200,
                error: false,
                success: true,
                message: "updated Successfully",
                data: res
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
                message: "can't update values",
                data: err
            }
            // return reply(response);
            return reply({edc: commonfun.encrypt(JSON.stringify(response))});
        });

    }
};
