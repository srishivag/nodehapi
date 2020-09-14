const commonfun = require('../libraries/commonfunction');
// const det_equ = require('../../models/Details_equipment');
const ptw_plant_model = require('../models/ptw_plant');
var dateFormat = require('dateformat');
const userquery = require('../libraries/userquery');
const Joi = require("joi");
exports.insert_ptw_plant = {
    // method: 'POST',
    // path: '/plant_equip_tool_insert',
    validate: {
        payload: {
            plantid: Joi.string().required(),
            plantname: Joi.string().required(),
            status: Joi.boolean().required()
        }
    },
    handler: async function (request, reply) {
        console.log("entered to insert ptw_plant")
        let data = {
            plantid: request.payload.plantid,
            plantname: request.payload.plantname,
            status: request.payload.status,
            createdAt: dateFormat(new Date(), 'yyyy-mm-dd_HH-MM'),
            updatedAt: dateFormat(new Date(), 'yyyy-mm-dd_HH-MM')
        };
        console.log(data);
        commonfun.insertTable(ptw_plant_model, data).then(res => {
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
            let response = {
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


exports.fetch_ptw_plant = {
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

        let where = "ppl_id=" + request.params.ppl_id
        let allData = {
            selectList: '*',
            where: where.toString()
        }
        commonfun.commonSelectQuery(ptw_plant_model, null, allData).then((res
        ) => {
            // if (err) {
            //     console.log(err)
            // } else {
            console.log("res", res);
            let response = {
                statusCode: 200,
                error: false,
                success: true,
                message: "List of plants",
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
                message: "can not find list",
                data: err
            }
            // return reply(response);
            return reply({edc: commonfun.encrypt(JSON.stringify(response))});
        });

    }
};


exports.update_ptw_plant = {
    validate: {
        payload: {
            ppl_id: Joi.number().required(),
            plantid: Joi.string().required(),
            plantname: Joi.string().required(),
            status: Joi.boolean().required()
        }
    },
    handler: async function (request, reply) {
        console.log("entered to update insert");
        let column = {
            plantid: request.payload.plantid,
            plantname: request.payload.plantname,
            status: request.payload.status,
            updatedAt: dateFormat(new Date(), 'yyyy-mm-dd_HH-MM')
        }
        console.log("id", request.payload.id);
        let where = {
            ppl_id: request.payload.ppl_id
        };
        userquery.updatemultiple(ptw_plant_model, column, where).then((res
        ) => {
            console.log("res", res);
            let response={
                statusCode: 200,
                error: false,
                success: true,
                message: "updated successfully",
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
                // message: "Get Equipment List ",
                data: err
            }
            // return reply(response);
            return reply({edc: commonfun.encrypt(JSON.stringify(response))});
        });

    }
};




