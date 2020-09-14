const commonfun = require('../libraries/commonfunction');
const userquery = require('../libraries/userquery');
// const det_equ = require('../../models/Details_equipment');
const ppmp_awd = require('../models/ppmp_awd');
var dateFormat = require('dateformat');
const Joi = require("joi");
exports.insert_ppmp_awd = {
    // method: 'POST',
    // path: '/plant_equip_tool_insert',
    validate: {
        payload: {
            // powwe_id: Joi.number().required(),
            ptw_ref_id: Joi.string().required(),
            ptw_id: Joi.number().required(),
            interaction: Joi.number().required(),
            activity: Joi.string().required(),
            title: Joi.string().required(),
            interactivehazard: Joi.string().required(),
            docRefNo: Joi.string().required(),
            NoofPeople: Joi.number().required(),
            candowork: Joi.boolean().required(),
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
            interaction: request.payload.interaction,
            activity: request.payload.activity,
            title: request.payload.title,
            interactivehazard: request.payload.interactivehazard,
            docRefNo: request.payload.docRefNo,
            NoofPeople: request.payload.NoofPeople,
            candowork: request.payload.candowork,
            Addons: request.payload.Addons,
            Remarks: request.payload.Remarks,
            createdBy:request.payload.createdBy,
            createdAt: dateFormat(new Date(), 'yyyy-mm-dd_HH-MM'),
            updatedAt: dateFormat(new Date(), 'yyyy-mm-dd_HH-MM')
        };
        console.log("data", data);
        commonfun.insertTable(ppmp_awd, data).then(res => {
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


exports.get_ppmp_awd = {
    handler: async function (request, reply) {
        console.log("entered to select equipment");

        console.log("params", request.params);

        let where = ""

        if(request.params.powwe_id){
            where="powwe_id=" + request.params.powwe_id
        }else{
            where=true
        }
        let allData = {
            selectList: '*',
            where: where.toString()
        }
        commonfun.commonSelectQuery(ppmp_awd, null, allData).then((res
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


exports.update_ppmp_awd = {
    validate: {
        payload: {
            powwe_id: Joi.number().required(),
            ptw_ref_id: Joi.string().required(),
            ptw_id: Joi.number().required(),
            interaction: Joi.number().required(),
            activity: Joi.string().required(),
            title: Joi.string().required(),
            interactivehazard: Joi.string().required(),
            docRefNo: Joi.string().required(),
            NoofPeople: Joi.number().required(),
            candowork: Joi.boolean().required(),
            Addons: Joi.string().required(),
            Remarks: Joi.string().required(),
            createdBy:Joi.string().required()
        }
    },
    handler: async function (request, reply) {
        console.log("entered to update insert");
        let column = {
            ptw_ref_id: request.payload.ptw_ref_id,
            ptw_id: request.payload.ptw_id,
            interaction: request.payload.interaction,
            activity: request.payload.activity,
            title: request.payload.title,
            interactivehazard: request.payload.interactivehazard,
            docRefNo: request.payload.docRefNo,
            NoofPeople: request.payload.NoofPeople,
            candowork: request.payload.candowork,
            Addons: request.payload.Addons,
            Remarks: request.payload.Remarks,
            createdBy:request.payload.createdBy,
            updatedAt: dateFormat(new Date(), 'yyyy-mm-dd_HH-MM')
        }
        let where = {
            powwe_id: request.payload.powwe_id
        };
        userquery.updatemultiple(ppmp_awd, column, where).then((res
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
