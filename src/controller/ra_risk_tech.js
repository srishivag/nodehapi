const commonfun = require('../libraries/commonfunction');
// const det_equ = require('../../models/Details_equipment');
const ra_risktech = require('../models/Ra_risk_tech');
var dateFormat = require('dateformat');
const userquery = require('../libraries/userquery');
const Joi = require("joi");
exports.insert_risk_tech = {
    // method: 'POST',
    // path: '/plant_equip_tool_insert',
    validate: {
        payload: {
            name: Joi.string().required(),
            status:Joi.string().required(),
            createdBy:Joi.number().required()
        }
    },
    handler: async function (request, reply) {
        console.log("entered to insert_risk_tech insert");
        // return reply({
        //     status:"ok"
        // })
        let data = {
            name: request.payload.name,
            status:request.payload.status,
            createdBy:request.payload.createdBy,
            createdAt: dateFormat(new Date(), 'yyyy-mm-dd_HH-MM'),
            updatedAt: dateFormat(new Date(), 'yyyy-mm-dd_HH-MM')
        };
        commonfun.insertTable(ra_risktech, data).then(res => {

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


exports.fetch_risk_tech = {
    handler: async function (request, reply) {

       // let where = "techId=" + request.params.techId
        let allData = {
            selectList: '*',
            //where: where.toString()
        }
        commonfun.commonSelectQuery(ra_risktech, null, allData).then((res
        ) => {
            console.log("res", res);
            let response = {
                statusCode: 200,
                error: false,
                success: true,
                message: "Get risk techinque List ",
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

exports.update_risk_tech = {
    validate: {
        payload: {
            techId: Joi.number().required(),
            name: Joi.string().required(),
            status:Joi.string().required(),
            createdBy:Joi.number().required()
        }
    },
    handler: async function (request, reply) {
        let column = {
            name: request.payload.name,
            status:request.payload.status,
            createdBy:request.payload.createdBy,
            updatedAt: dateFormat(new Date(), 'yyyy-mm-dd_HH-MM')
        }
        console.log("id", request.payload.techId);
        let where = {
            techId: request.payload.techId
        };

        userquery.updatemultiple(ra_risktech, column, where).then((res
        ) => {
            console.log("res", res);
            let response = {
                statusCode: 200,
                error: false,
                success: true,
                message: "Ra risk techinque updated successfully",
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
                message: "unable to update Ra risk techinque",
                data: err
            }
            // return reply(response);
            return reply({edc: commonfun.encrypt(JSON.stringify(response))});
        });

    }
};
