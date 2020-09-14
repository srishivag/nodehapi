const commonfun = require('../libraries/commonfunction');
// const det_equ = require('../../models/Details_equipment');
const ra_specific = require('../models/Ra_specific');
var dateFormat = require('dateformat');
const userquery = require('../libraries/userquery');
const ra_location = require('../models/Locations');
const Joi = require("joi");

// exports.insert_specific = {
//     // method: 'POST',
//     // path: '/plant_equip_tool_insert',
//     validate: {
//         payload: {
//             name: Joi.string().required(),
//             status:Joi.string().required()
//         }
//     },
//     handler: async function (request, reply) {
//         console.log("entered to insert_role insert");
//         // return reply({
//         //     status:"ok"
//         // })
//         let data = {
//             name: request.payload.name,
//             status:request.payload.status,
//             createdAt: dateFormat(new Date(), 'yyyy-mm-dd_HH-MM')
//         };
//         commonfun.insertTable(ra_specific, data).then(res => {

//             var response = {
//                 statusCode: 200,
//                 error: false,
//                 success: true,
//                 message: "saved successfully",
//                 data: res
//             }
//             // return reply(response);
//             return reply({edc: commonfun.encrypt(JSON.stringify(response))});
//         }).catch(err => {

//             var response = {
//                 statusCode: 500,
//                 error: true,
//                 success: false,
//                 message: "can't save data",
//                 data: err
//             }
//             // return reply(response);
//             return reply({edc: commonfun.encrypt(JSON.stringify(response))});
//         })

//     }
// };


exports.fetch_specific = {
    handler: async function (request, reply) {

        //let where = "id=" + request.params.id
        let allData = {
            selectList: '*'
            //where: where.toString()
        }
        commonfun.commonSelectQuery(ra_specific, null, allData).then((res) => {
           // console.log("res", res);
            let response = {
                statusCode: 200,
                error: false,
                success: true,
                message: "Get specific List ",
                data: res
            }
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
            //return reply({edc: commonfun.encrypt(JSON.stringify(response))});
        });

    }
};
exports.fetch_Location = {
    handler: async function (request, reply) {

        //let where = "id=" + request.params.id
        let allData = {
            selectList: 'major_location',
            where: `major_location!='' `
        }
        commonfun.commonSelectQuery(ra_location, null, allData).then((res) => {
            //console.log("res", res);
            let response = {
                statusCode: 200,
                error: false,
                success: true,
                message: "Get location List ",
                data: res
            }
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
            //return reply({edc: commonfun.encrypt(JSON.stringify(response))});
        });

    }
};


// exports.update_specific = {
//     validate: {
//         payload: {
//             id: Joi.number().required(),
//             name: Joi.string().required(),
//             status:Joi.string().required(),
//         }
//     },
//     handler: async function (request, reply) {
//         let column = {
//             name: request.payload.name,
//             status:request.payload.status,
//             createdAt:dateFormat(new Date(), 'yyyy-mm-dd_HH-MM'),
//             updatedAt:dateFormat(new Date(), 'yyyy-mm-dd_HH-MM')
//         }
//         console.log("id", request.payload.id);
//         let where = {
//             id: request.payload.id
//         };

//         userquery.updatemultiple(ra_specific, column, where).then((res
//         ) => {
//             console.log("res=-------------------------", res);
//             let response = {
//                 statusCode: 200,
//                 error: false,
//                 success: true,
//                 message: "Ra specific updated successfully",
//                 data: res
//             }
//             // return reply(response);
//             return reply({edc: commonfun.encrypt(JSON.stringify(response))});
//             // }
//         }).catch(err => {
//             console.log(err);
//             let response = {
//                 statusCode: 400,
//                 error: true,
//                 success: false,
//                 message: "unable to update Ra specific",
//                 data: err
//             }
//             // return reply(response);
//             return reply({edc: commonfun.encrypt(JSON.stringify(response))});
//         });

//     }
// };