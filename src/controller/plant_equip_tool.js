const commonfun = require('../libraries/commonfunction');
// const det_equ = require('../../models/Details_equipment');
const equip_tool = require('../models/plant_equip_tool');
var dateFormat = require('dateformat');
const userquery = require('../libraries/userquery');
const Joi = require("joi");
exports.insert_equiptool = {
    // method: 'POST',
    // path: '/plant_equip_tool_insert',
    validate: {
        payload: {
            // pet_id: Joi.number().required(),
            ptw_ref_id: Joi.string().required(),
            ptw_id: Joi.number().required(),
            assetsrequired: Joi.number().required(),
            quantity: Joi.number().required(),
            status: Joi.boolean().required(),
            createdBy:Joi.string().required()
        }
    },
    handler: async function (request, reply) {
        console.log("entered to insert_equiptool insert");
        // return reply({
        //     status:"ok"
        // })
        let data = {
            ptw_ref_id: request.payload.ptw_ref_id,
            ptw_id: request.payload.ptw_id,
            assetsrequired: request.payload.assetsrequired,
            quantity: request.payload.quantity,
            status: request.payload.status,
            createdBy:request.payload.createdBy,
            createdAt: dateFormat(new Date(), 'yyyy-mm-dd_HH-MM'),
            updaatedAt: dateFormat(new Date(), 'yyyy-mm-dd_HH-MM')

        };
        commonfun.insertTable(equip_tool, data).then(res => {

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


exports.fetch_equiptool = {
    handler: async function (request, reply) {

        let where = "pet_id=" + request.params.pet_id
        let allData = {
            selectList: '*',
            where: where.toString()
        }
        commonfun.commonSelectQuery(equip_tool, null, allData).then((res
        ) => {
            console.log("res", res);
            let response = {
                statusCode: 200,
                error: false,
                success: true,
                message: "Get Equipment List ",
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


exports.update_equiptool = {
    validate: {
        payload: {
            pet_id: Joi.number().required(),
            ptw_ref_id: Joi.string().required(),
            ptw_id: Joi.number().required(),
            assetsrequired: Joi.number().required(),
            quantity: Joi.number().required(),
            createdBy:Joi.string().required(),
            status: Joi.boolean().required()
        }
    },
    handler: async function (request, reply) {
        let column = {
            ptw_id: request.payload.ptw_id,
            ptw_ref_id: request.payload.ptw_ref_id,
            assetsrequired: request.payload.assetsrequired,
            quantity: request.payload.quantity,
            status: request.payload.status,
            createdBy:request.payload.createdBy,
        }
        console.log("id", request.payload.pet_id);
        let where = {
            pet_id: request.payload.pet_id
        };
        userquery.updatemultiple(equip_tool, column, where).then((res
        ) => {
            console.log("res", res);
            let response = {
                statusCode: 200,
                error: false,
                success: true,
                message: "Equipment List updated successfully",
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
                message: "unable to update equipment list",
                data: err
            }
            // return reply(response);
            return reply({edc: commonfun.encrypt(JSON.stringify(response))});
        });

    }
};




