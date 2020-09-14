const commonfun = require('../libraries/commonfunction');
const userquery = require('../libraries/userquery');
// const det_equ = require('../../models/Details_equipment');
const ppmp_meterial_doc = require('../models/ppmp_meterial_doc');
var dateFormat = require('dateformat');
const Joi = require("joi");
exports.insert_ppmp_meterial_doc = {
    // method: 'POST',
    // path: '/plant_equip_tool_insert',
    validate: {
        payload: {
            // ppmpdoc_id: Joi.number().required(),
            ptw_ref_id: Joi.string().required(),
            ptw_id: Joi.number().required(),
            ppmm_id: Joi.number().required(),
            doc_name: Joi.string().required(),
            doc_path: Joi.string().required(),
            status: Joi.boolean().required(),
            createdBy:Joi.string().required()
        }
    },
    handler: async function (request, reply) {
        console.log("entered to insert ptw_plant");
        let data = {
            ptw_ref_id: request.payload.ptw_ref_id,
            ptw_id: request.payload.ptw_id,
            ppmm_id: request.payload.ppmm_id,
            doc_name: request.payload.doc_name,
            doc_path: request.payload.doc_path,
            status: request.payload.status,
            createdBy:request.payload.createdBy,
            createdAt: dateFormat(new Date(), 'yyyy-mm-dd_HH-MM'),
            updatedAt: dateFormat(new Date(), 'yyyy-mm-dd_HH-MM')
        };
        console.log("data", data);
        commonfun.insertTable(ppmp_meterial_doc, data).then(res => {
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


exports.get_ppmp_meterial_doc = {
    handler: async function (request, reply) {
        console.log("entered to select equipment");

        console.log("params", request.params);

        let where = "";
        if(request.params.ppmpdoc_id){
            where="ppmpdoc_id=" + request.params.ppmpdoc_id;
        }else{
            where=true;
        }

        let allData = {
            selectList: '*',
            where: where.toString()
        }
        commonfun.commonSelectQuery(ppmp_meterial_doc, null, allData).then((res
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


exports.update_ppmp_meterial_doc = {
    validate: {
        payload: {
            ppmpdoc_id: Joi.number().required(),
            ptw_ref_id: Joi.string().required(),
            ptw_id: Joi.number().required(),
            ppmm_id: Joi.number().required(),
            doc_name: Joi.string().required(),
            doc_path: Joi.string().required(),
            status: Joi.boolean().required(),
            createdBy:Joi.string().required()
        }
    },
    handler: async function (request, reply) {
        console.log("entered to update insert");
        let column = {
            ptw_ref_id: request.payload.ptw_ref_id,
            ptw_id: request.payload.ptw_id,
            ppmm_id: request.payload.ppmm_id,
            doc_name: request.payload.doc_name,
            doc_path: request.payload.doc_path,
            status: request.payload.status,
            createdBy:request.payload.createdBy,
            updatedAt: dateFormat(new Date(), 'yyyy-mm-dd_HH-MM')
        }
        let where = {
            ppmpdoc_id: request.payload.ppmpdoc_id
        };
        userquery.updatemultiple(ppmp_meterial_doc, column, where).then((res
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
