const commonfun = require('../libraries/commonfunction');
const userquery = require('../libraries/userquery');
// const det_equ = require('../../models/Details_equipment');
const ppmp_pcagent = require('../models/ppmp_pcagent');
var dateFormat = require('dateformat');
const Joi = require("joi");
exports.insert_ppmp_pcagent = {
    // method: 'POST',
    // path: '/plant_equip_tool_insert',
    validate: {
        payload: {
            // pcaagent: Joi.number().required(),
            ptw_ref_id: Joi.string().required(),
            ptw_id: Joi.number().required(),
            agent: Joi.string().required(),
            nature: Joi.string().required(),
            twa: Joi.string().required(),
            stel: Joi.string().required(),
            intialreading: Joi.string().required(),
            control: Joi.string().required(),
            responsibility: Joi.string().required(),
            workdone: Joi.boolean().required(),
            Addons: Joi.string().required(),
            Remarks: Joi.string().required(),
            createdBy:Joi.string().required()
        }
    },
    handler: async function (request, reply) {
        console.log("entered to insert ptw_plant");
        let data = {
            ptw_ref_id: request.payload.ptw_ref_id,
            ptw_id: request.payload.ptw_id,
            agent: request.payload.agent,
            nature: request.payload.nature,
            twa: request.payload.twa,
            stel: request.payload.stel,
            intialreading: request.payload.intialreading,
            control: request.payload.control,
            responsibility: request.payload.responsibility,
            workdone: request.payload.workdone,
            Addons: request.payload.Addons,
            Remarks: request.payload.Remarks,
            createdBy:request.payload.createdBy,
            createdAt: dateFormat(new Date(), 'yyyy-mm-dd_HH-MM'),
            updatedAt: dateFormat(new Date(), 'yyyy-mm-dd_HH-MM')
        };
        console.log("data", data);
        commonfun.insertTable(ppmp_pcagent, data).then(res => {
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


exports.get_ppmp_pcagent = {
    handler: async function (request, reply) {
        console.log("entered to select equipment");

        console.log("params", request.params);



        let where = ""

        if(request.params.pcaagent){
            where="pcaagent=" + request.params.pcaagent
        }else{
            where=true;
        }
        let allData = {
            selectList: '*',
            where: where.toString()
        }
        commonfun.commonSelectQuery(ppmp_pcagent, null, allData).then((res
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


exports.update_ppmp_pcagent = {
    validate: {
        payload: {
            pcaagent: Joi.number().required(),
            ptw_ref_id: Joi.string().required(),
            ptw_id: Joi.number().required(),
            agent: Joi.string().required(),
            nature: Joi.string().required(),
            twa: Joi.string().required(),
            stel: Joi.string().required(),
            intialreading: Joi.string().required(),
            control: Joi.string().required(),
            responsibility: Joi.string().required(),
            workdone: Joi.boolean().required(),
            Addons: Joi.string().required(),
            Remarks: Joi.string().required(),
            createdBy:Joi.string().required()
        }
    },
    handler: async function (request, reply) {
        console.log("entered to update insert");
        let column = {
            pcaagent: request.payload.pcaagent,
            ptw_ref_id: request.payload.ptw_ref_id,
            ptw_id: request.payload.ptw_id,
            agent: request.payload.agent,
            nature: request.payload.nature,
            twa: request.payload.twa,
            stel: request.payload.stel,
            intialreading: request.payload.intialreading,
            control: request.payload.control,
            responsibility: request.payload.responsibility,
            workdone: request.payload.workdone,
            Addons: request.payload.Addons,
            Remarks: request.payload.Remarks,
            createdBy:request.payload.createdBy,
            updatedAt: dateFormat(new Date(), 'yyyy-mm-dd_HH-MM'),
        }
        let where = {
            pcaagent: request.payload.pcaagent
        };
        userquery.updatemultiple(ppmp_pcagent, column, where).then((res
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
