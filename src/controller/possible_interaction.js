const commonfun = require('../libraries/commonfunction');
const userquery = require('../libraries/userquery');
// const det_equ = require('../../models/Details_equipment');
const possible_interaction_model = require('../models/possible_interaction');
var dateFormat = require('dateformat');
const Joi = require("joi");
exports.insert_possible_interaction = {
    // method: 'POST',
    // path: '/plant_equip_tool_insert',
    validate: {
        payload: {
            ptw_ref_id: Joi.string().required(),
            ptw_id: Joi.number().required(),
            possible_ptw_id: Joi.number().required(),
            interaction_object:Joi.string().required(),
            hazardInteraction:Joi.string().required(),
            relloc:Joi.string().required(),
            Distance:Joi.string().required(),
            remark:Joi.string().required()
        }
    },
    handler: async function (request, reply) {
        console.log("entered to insert ptw_plant");
        let data = {
            ptw_ref_id: request.payload.ptw_ref_id,
            ptw_id: request.payload.ptw_id,
            possible_ptw_id:request.payload.possible_ptw_id,
            interaction_object:request.payload.interaction_object,
            hazardInteraction:request.payload.hazardInteraction,
            relloc:request.payload.relloc,
            Distance:request.payload.Distance,
            remark:request.payload.remark,
            createdAt:dateFormat(new Date(), 'yyyy-mm-dd_HH-MM'),
            updaatedAt: dateFormat(new Date(), 'yyyy-mm-dd_HH-MM')
        };
        console.log("data",data);
        commonfun.insertTable(possible_interaction_model, data).then(res => {
            let response={
                statusCode: 200,
                error: false,
                success: true,
                message: "inserted successfully",
                data: res
            }
            // return reply(response);
            return reply({edc: commonfun.encrypt(JSON.stringify(response))});
        }).catch(err=>{
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


exports.get_possible_interaction = {
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
        console.log("params",request.params);

        let where="ppp_id="+request.params.ppp_id
        let allData={
            selectList:'*',
            where:where.toString()
        }
        commonfun.commonSelectQuery(possible_interaction_model, null,allData).then((res
        ) => {
            // if (err) {
            //     console.log(err)
            // } else {
            console.log("res",res);
            let response={
                statusCode: 200,
                error: false,
                success: true,
                message: "List of possible_interactions",
                data: res
            }
            // return reply(response);
            return reply({edc: commonfun.encrypt(JSON.stringify(response))});
            // }
        }).catch(err=>{
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


exports.update_possible_interaction= {
    validate: {
        payload: {
            ppp_id:Joi.number().required(),
            ptw_ref_id: Joi.string().required(),
            ptw_id: Joi.number().required(),
            possible_ptw_id: Joi.number().required(),
            interaction_object:Joi.string().required(),
            hazardInteraction:Joi.string().required(),
            relloc:Joi.string().required(),
            Distance:Joi.string().required(),
            remark:Joi.string().required()
        }
    },
    handler: async function (request, reply) {
        console.log("entered to update insert");
        let column={
            ptw_ref_id: request.payload.ptw_ref_id,
            ptw_id: request.payload.ptw_id,
            possible_ptw_id:request.payload.possible_ptw_id,
            interaction_object:request.payload.interaction_object,
            hazardInteraction:request.payload.hazardInteraction,
            relloc:request.payload.relloc,
            Distance:request.payload.Distance,
            remark:request.payload.remark,
            updaatedAt: dateFormat(new Date(), 'yyyy-mm-dd_HH-MM')
        }
        console.log("id",request.payload.id);
        let where={
            ppp_id:request.payload.ppp_id
        };
        userquery.updatemultiple(possible_interaction_model, column,where).then((res
        ) => {
            console.log("res",res);
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
        }).catch(err=>{
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
