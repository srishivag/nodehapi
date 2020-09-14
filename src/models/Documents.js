const { Model } = require('objection');

class Documents extends Model {
  // Table name is the only required property.
  static get tableName() {
    return '' + PREFIX + 'documents';
  }
  static get idColumn() {
    return 'doc_id';
  }
  static get jsonSchema() {
    return {
      type: 'object',
      required: ['document_number'],
      properties: {
        doc_id: { type: 'integer' },
        document_number: { type: 'string' },
        document_type: { type: 'string' },
        document_category: { type: 'string' },
        document_name: { type: 'string' },
        document: { type: 'string' },
        version:  { type: 'string' },
        version_changes: { type: 'string' },
        release_note: { type: 'string' },
        release_date: { type: 'date' },
        effective_implementation: { type: 'date'},
        status: { type: 'integer'},
        archived: { type: 'integer'},
        created_at: { type: 'date'},
        updated_at: { type: 'date'},
      }
    };
  }
}
module.exports = Documents;

'use strict';

// var jwt = require('jsonwebtoken');
var Joi = require('joi');
//var Boom = require('boom');
// var bcrypt = require('bcrypt');
// const saltRounds = 10;
// var trycatch = require('trycatch')
// var md5 = require('md5');
// var generator = require('generate-password')
var db = require('../config/db')
var dateFormat = require('dateformat');
//var now = new Date();
var base64 = require('file-base64')
//var fs = require('fs');
// const HummusRecipe = require('hummus-recipe');
// var hummus = require('hummus')
var watermark = require('image-watermark');
// var async = require("async");
// var secret = 'AkRiViA-OhS-Ms-AudiT@$W#JnoH@$RPOIDW*65g14dg5@$5#$5%key*&^78t6bGTTY7868T^%(*k';
var config = require('../config/config');
const userquery = require('../libraries/userquery');
const commonfun = require('../libraries/commonfunction');
const documents = require('./Documents');
const document_user_role = require('./Document_user_role');
const document_types = require('./Document_types');
const document_category = require('../models/Document_categories');
// add pending/prepare document
exports.addDocument = {
    validate: {
        payload: {
            document_type: Joi.string().required(),
            document_category: Joi.string().required(),
            document_name: Joi.string().required(),
            document: Joi.string().required(),
            version_changes: Joi.string().required(),
            share: Joi.string().required(),
            roles: Joi.string().required()
        }
    },
    handler: function (request, reply) {

        var userid = request.auth.credentials.username;

        var document_type = request.payload.document_type
        var document_category = request.payload.document_category
        var document_name = request.payload.document_name
        var document = request.payload.document
        var version_changes = request.payload.version_changes
        var share = request.payload.share
        var status
        var role = request.payload.roles
        if (share == '1') {
            status = 1
        } else {
            status = 0
        }

        // db.query(" select role from user_roles where userid = '" + userid + "' ", function (error, result, fields) {
        //     if (error) {
        //         return reply({
        //             statusCode: 200,
        //             error: true,
        //             message: error.sqlMessage,
        //             data: null
        //         });
        //     } else {
        //         var roles = [];
        //         result.forEach((row) => {
        //             roles.push(row.role)
        //         })

        if (role == 'MR' || role == 'Prepare') {
            const data = ['document_type', 'document_category', 'document_name', 'document', 'version_changes', 'status']
            db.query(
                // "insert into documents (document_type,document_category,document_name,document,version_changes,status) values ('" + document_type + "','" + document_category + "','" + document_name + "','" + document + "','" + version_changes + "','" + status + "') ", 
                commonfun.insertTable(documents, data).then((err, res) => {


                    // function (err, res) {
                    if (err) {
                        return reply({
                            statusCode: 200,
                            error: true,
                            message: err.sqlMessage,
                            data: null
                        });
                    } else {
                        var doc_id = res.insertId;
                        const insertdata = [doc_id, userid, 'Prepare']
                        if (doc_id) {
                            db.query(
                                // "insert ignore document_user_role (doc_id,userid,role) values ('" + doc_id + "','" + userid + "','Prepare') ",
                                commonfun.insertTable(document_user_role, insertdata),
                                function (e1) {
                                    if (e1) {
                                        return reply({
                                            statusCode: 200,
                                            error: true,
                                            message: e1.sqlMessage,
                                            data: null
                                        });
                                    } else {
                                        return reply({
                                            statusCode: 200,
                                            error: false,
                                            message: "Document saved successfully",
                                            data: null,
                                        });
                                    }
                                });
                        } else {
                            return reply({
                                statusCode: 200,
                                error: true,
                                message: "Unable to get Document ID",
                                data: null
                            });
                        }
                    }
                })
                // }
            )

        } else {
            return reply({
                statusCode: 200,
                error: true,
                message: "You are not having permissions to prepare policies and templates",
                // data: result,
            });
        }
        //     }


        // })

    },
    auth: {
        strategy: 'token'
    }
};

exports.updateDocumentDetails = {
    validate: {
        payload: {
            doc_id: Joi.number().required(),
            doc_name: Joi.string().required(),
            doc_type: Joi.string().required(),
            doc_category: Joi.string().required()
        }
    },
    handler: function (request, reply) {
        var doc_id = request.payload.doc_id
        var document_name = request.payload.document_name
        // var document_type = request.payload.document_type
        var document_category = request.payload.document_category
        const tablemap = documents;
        const colname = [{
            'document_type': document.type,
            'document_category': document_category,
            'document_name': document_name
        }];
        const condkey = [{
            'doc_id': doc_id
        }]
        db.query(
            // "update documents set document_type = '" + document.type + "', document_category = '" + document_category + "', document_name = '" + document_name + "' where doc_id = '" + doc_id + "' ",


            userquery.updatemultiple(tablemap, colname, condkey).then(e1 => {
                if (e1) {
                    return reply({
                        statusCode: 200,
                        error: true,
                        message: e1.sqlMessage,
                        data: null
                    });
                } else {
                    return reply({
                        statusCode: 200,
                        error: false,
                        message: "Document details updated successfully",
                        data: null,
                    });
                }
            })
            // function (e1) {
            //     if (e1) {
            //         return reply({
            //             statusCode: 200,
            //             error: true,
            //             message: e1.sqlMessage,
            //             data: null
            //         });
            //     } else {
            //         return reply({
            //             statusCode: 200,
            //             error: false,
            //             message: "Document details updated successfully",
            //             data: null,
            //         });
            //     }
            // }
        )
    },
    auth: {
        strategy: 'token'
    }
}


exports.createDocument = {
    validate: {
        payload: {
            document_type: Joi.string().required(),
            document_category: Joi.string().required(),
            document_name: Joi.string().required(),
            emp_id: Joi.string().required(),
            // document: Joi.string().required(),
            // version_changes: Joi.string().required(),
            share: Joi.string().required(),
            roles: Joi.string().required()
        }
    },
    handler: function (request, reply) {

        // var userid = request.auth.credentials.username;

        var document_type = request.payload.document_type
        var document_category = request.payload.document_category
        var document_name = request.payload.document_name
        var emp_id = request.payload.emp_id
        // var document = request.payload.document
        // var version_changes = request.payload.version_changes
        var share = request.payload.share
        var status
        var role = request.payload.roles
        if (share == '1') {
            status = 1
        } else {
            status = 0
        }

        if (role == 'MR') {
            const modeldata = [document_type, document_category, document_name];
            db.query(
                // "insert into documents (document_type,document_category,document_name,) values ('" + document_type + "','" + document_category + "','" + document_name + "','" + status + "') ",
                commonfun.insertdata(documents, modeldata).then((err, res) => {
                    // function (err, res) {
                    if (err) {
                        return reply({
                            statusCode: 200,
                            error: true,
                            message: err.sqlMessage,
                            data: null
                        });
                    } else {
                        var doc_id = res.insertId;
                        const data = [doc_id, emp_id, 'Prepare']
                        if (doc_id) {
                            db.query(
                                // "insert ignore document_user_role (doc_id,userid,role) values ('" + doc_id + "','" + emp_id + "','Prepare') ",
                                commonfun.insertTable(document_user_role, data).then(e1 => {
                                    if (e1) {
                                        return reply({
                                            statusCode: 200,
                                            error: true,
                                            message: e1.sqlMessage,
                                            data: null
                                        });
                                    } else {
                                        return reply({
                                            statusCode: 200,
                                            error: false,
                                            message: "Document created successfully",
                                            data: null,
                                        });
                                    }

                                    // function (e1) {
                                    //     if (e1) {
                                    //         return reply({
                                    //             statusCode: 200,
                                    //             error: true,
                                    //             message: e1.sqlMessage,
                                    //             data: null
                                    //         });
                                    //     } else {
                                    //         return reply({
                                    //             statusCode: 200,
                                    //             error: false,
                                    //             message: "Document created successfully",
                                    //             data: null,
                                    //         });
                                    //     }
                                    // }
                                })
                            );
                        } else {
                            return reply({
                                statusCode: 200,
                                error: true,
                                message: "Unable to get Document ID",
                                data: null
                            });
                        }
                    }
                })
                // }
            )


        } else {
            return reply({
                statusCode: 200,
                error: true,
                message: "You are not having permissions to prepare new document",
                // data: result,
            });
        }
        //     }


        // })

    },
    auth: {
        strategy: 'token'
    }
};


// list of all processed documents filter by uid
exports.documentsList = {

    handler: function (request, reply) {
        // var token = request.auth.credentials;
        // var decode = jwt.decode(token, secret)
        var userid = request.auth.credentials.username;
        var pending = [],
            prepared = [],
            reviewed = [],
            approved = [];
        var ret = {}
        const tablemap = document_user_role;
        const columnlist = [raw(`if(dur.role = Prepare, '" + userid + "', '') as writer`, 'dur.link_id', 'dur.role', 'd.doc_id', ' document_id', 'd.document_type', 'd.document_category', 'd.document_name', 'd.version_changes', 'd.status', 'dt.type_code', 'dt.type_name', 'dc.category_code', 'dc.category_name')]
        const innerJoinRelation = documents;
        const leftJoinRelation = [document_types, document_category]
        const condition = `dur.userid = '" + userid + "'`
        db.query(
            // " select if(dur.role = 'Prepare', '" + userid + "', '') as writer, dur.link_id, dur.role, d.doc_id, d.document_number as document_id, d.document_type, d.document_category, d.document_name, d.version_changes, d.status, dt.type_code, dt.type_name, dc.category_code, dc.category_name from document_user_role dur inner join documents d on d.doc_id = dur.doc_id left join document_types dt on dt.dt_id = d.document_type left join document_categories dc on dc.dc_id = d.document_category where dur.userid = '" + userid + "' ",
            userquery.selectwithwherecondandrelations(tablemap, columnlist, innerJoinRelation, leftJoinRelation, condition).then((error, result) => {
                if (error) {
                    return reply({
                        statusCode: 200,
                        error: true,
                        message: error.sqlMessage,
                        data: null
                    });
                } else {
                    result.forEach((row) => {
                        if (row.role == 'Prepare') {
                            if (row.status == 0) {
                                pending.push(row)
                            } else {
                                prepared.push(row)
                            }
                        } else if (row.role == 'Review') {
                            reviewed.push(row)
                        } else if (row.role == 'Approve') {
                            approved.push(row)
                        }
                    })


                    ret['pending'] = pending
                    ret['prepared'] = prepared
                    ret['reviewed'] = reviewed
                    ret['approved'] = approved
                    ret['inprogress'] = result

                    return reply({
                        statusCode: 200,
                        error: false,
                        message: "list of processed documents",
                        data: ret,
                    });
                }
            })
            // function (error, result) {
            //     if (error) {
            //         return reply({
            //             statusCode: 200,
            //             error: true,
            //             message: error.sqlMessage,
            //             data: null
            //         });
            //     } else {
            //         result.forEach((row) => {
            //             if (row.role == 'Prepare') {
            //                 if (row.status == 0) {
            //                     pending.push(row)
            //                 } else {
            //                     prepared.push(row)
            //                 }
            //             } else if (row.role == 'Review') {
            //                 reviewed.push(row)
            //             } else if (row.role == 'Approve') {
            //                 approved.push(row)
            //             }
            //         })


            //         ret['pending'] = pending
            //         ret['prepared'] = prepared
            //         ret['reviewed'] = reviewed
            //         ret['approved'] = approved
            //         ret['inprogress'] = result

            //         return reply({
            //             statusCode: 200,
            //             error: false,
            //             message: "list of processed documents",
            //             data: ret,
            //         });
            //     }
            // }
        )

    },
    auth: {
        strategy: 'token'
    }
};


// list of all processed documents
exports.allProcessesDocsList = {

    handler: async function (request, reply) {
        var userid = request.auth.credentials.username;
        var pending = [],
            prepared = [],
            reviewed = [],
            approved = [];

        await db.query(
            // "SELECT e.emp_id,aur.urid, aur.emp_id, aur.role, aur.display_name, aur.change_date, aur.upto,
            //  cm.module_name, cm.short_code as module_code, cr.role_name FROM employees e INNER JOIN
            //   all_user_roles aur ON aur.emp_id = e.emp_id INNER JOIN all_roles ar ON ar.rid = aur.role 
            //   INNER JOIN config_modules cm ON cm.md_id = ar.module INNER JOIN config_roles cr
            //    ON cr.rol_id = ar.roleid WHERE cm.module_name='Documentation' and  
            //    aur.emp_id = '" + userid + "' AND (  ( CURDATE() <= aur.change_date AND aur.upto is null ) 
            //    OR ( CURDATE() <= aur.change_date AND aur.upto >= CURDATE() )  OR 
            //     ( CURDATE() >= aur.change_date AND aur.upto >= CURDATE() ) OR
            //      ( CURDATE() >= aur.change_date AND aur.upto is null )  ) ORDER BY aur.urid DESC",
            async function (err, res) {


                if (err) {
                    return reply({
                        statusCode: 200,
                        error: true,
                        message: err.sqlMessage,
                        data: null
                    });
                } else {
                    var roles = [];
                    await res.forEach((row) => {
                        roles.push(row.role_name)
                    })

                    if (roles.includes('MR')) {
                        const tablemap = documents;
                        const modalAlias = ['d', 'dp', 'da', 'dr', 'document_id', 'prepare_link', 'writer', 'review_link', 'reviewer', 'approve_link', 'approver'];
                        const columnlist = ['d.doc_id', 'd.document_number as document_id', 'd.document_type', 'd.document_category', 'd.document_name', 'd.status',
                            'dp.link_id as prepare_link', 'dp.userid as writer', 'dr.link_id as review_link', 'dr.userid as reviewer', 'da.link_id as approve_link', 'da.userid as approver'
                        ]
                        const joinrelationtable = document_user_role;
                        const wherecondition = 'd.status' < 4
                        // await db.query(
                        //     " select d.doc_id, d.document_number as document_id, d.document_type, d.document_category, d.document_name, d.status,
                        //      dp.link_id as prepare_link, dp.userid as writer, dr.link_id as review_link, dr.userid as reviewer, 
                        //      da.link_id as approve_link, da.userid as approver from documents d left join document_user_role dp
                        //       on dp.doc_id = d.doc_id and dp.role = 'Prepare' left join document_user_role dr on dr.doc_id = d.doc_id 
                        //       and dr.role = 'Review' left join document_user_role da on da.doc_id = d.doc_id and da.role = 'Approve' where d.status < 4  ",
                        userquery.selectquery(tablemap, modalAlias, columnlist, joinrelationtable, wherecondition, '', '')
                            .then((error, result) => {
                                if (error) {
                                    return reply({
                                        statusCode: 200,
                                        error: true,
                                        message: error.sqlMessage,
                                        data: null
                                    });
                                } else {

                                    result.forEach((row) => {
                                        // var bufferBase64 = new Buffer( row.document, 'binary' ).toString('base64');
                                        // row.document = bufferBase64

                                        if (row.status == 1) {
                                            prepared.push(row)
                                        } else if (row.status == 2) {
                                            reviewed.push(row)
                                        } else if (row.status == 3) {
                                            approved.push(row)
                                        } else if (row.status == 0) {
                                            pending.push(row)
                                        }
                                    })

                                    var ret = {}
                                    ret['pending'] = pending
                                    ret['prepared'] = prepared
                                    ret['reviewed'] = reviewed
                                    ret['approved'] = approved
                                    ret['inprogress'] = result

                                    return reply({
                                        statusCode: 200,
                                        error: false,
                                        message: "list of all processed documents",
                                        data: ret,
                                    });
                                }
                            })
                    }

                    // async function (error, result) {
                    //     if (error) {
                    //         return reply({
                    //             statusCode: 200,
                    //             error: true,
                    //             message: error.sqlMessage,
                    //             data: null
                    //         });
                    //     } else {

                    //         await result.forEach((row) => {
                    //             // var bufferBase64 = new Buffer( row.document, 'binary' ).toString('base64');
                    //             // row.document = bufferBase64

                    //             if (row.status == 1) {
                    //                 prepared.push(row)
                    //             } else if (row.status == 2) {
                    //                 reviewed.push(row)
                    //             } else if (row.status == 3) {
                    //                 approved.push(row)
                    //             } else if (row.status == 0) {
                    //                 pending.push(row)
                    //             }
                    //         })

                    //         var ret = {}
                    //         ret['pending'] = pending
                    //         ret['prepared'] = prepared
                    //         ret['reviewed'] = reviewed
                    //         ret['approved'] = approved
                    //         ret['inprogress'] = result

                    //         return reply({
                    //             statusCode: 200,
                    //             error: false,
                    //             message: "list of all processed documents",
                    //             data: ret,
                    //         });
                    //     }
                    // }



                }

            }
        )

    },
    auth: {
        strategy: 'token'
    }
};

// list of archived Documents
exports.archivedDocumentsList = {

    handler: function (request, reply) {
        const tablemap = documents;
        const columnlist = ['documents.doc_id', 'documents.document_number', 'documents.document_type', 'documents.version', 'documents.document_category', 'documents.document_name', 'status']

        db.query(
            // "  select d.doc_id, d.document_number, d.document_type, d.version, d.document_category, d.document_name, status from documents d where d.status = 5",
            userquery.selectwithcond(tablemap, columnlist, conditionkey).then((error, result) => {
                if (error) {
                    return reply({
                        statusCode: 200,
                        error: true,
                        message: error.sqlMessage,
                        data: null
                    });
                } else {

                    return reply({
                        statusCode: 200,
                        error: false,
                        message: "list of archived documents",
                        data: result,
                    });
                }
            })
            //  function (error, result) {
            //     if (error) {
            //         return reply({
            //             statusCode: 200,
            //             error: true,
            //             message: error.sqlMessage,
            //             data: null
            //         });
            //     } else {

            //         return reply({
            //             statusCode: 200,
            //             error: false,
            //             message: "list of archived documents",
            //             data: result,
            //         });
            //     }
            // }
        )
    },
    auth: {
        strategy: 'token'
    }
};


// list of released Documents
exports.releasedDocumentsList = {

    handler: function (request, reply) {
        const tablemap = document_user_role;
        const modalAlias = ['d', 'dur', 'dt', 'dc'];
        const columnlist = ['d.document_category', 'd.document_name', 'd.document', 'd.version', 'd.version_changes',
            'd.release_date', 'd.effective_implementation', 'd.status', 'd.created_at', 'd.updated_at', 'dt.type_code',
            'dt.type_name', 'dc.category_code', 'dc.category_name'
        ];
        const joinrelationtable = [documents, document_types, document_categories];
        const wherecondition = {
            'd.status': 4
        };
        const columngroupby = 'd.doc_id';

        db.query(
            // " select dur.link_id, dur.role, d.doc_id, d.document_type,
            //  d.document_category, d.document_name, d.document, d.version, d.version_changes,
            // d.release_date, d.effective_implementation, d.status, d.created_at, d.updated_at, dt.type_code,
            // dt.type_name, dc.category_code, dc.category_name from document_user_role dur inner join
            //   documents d on d.doc_id = dur.doc_id left join document_types 
            //   dt on dt.dt_id = d.document_type left join document_categories dc on 
            //   dc.dc_id = d.document_category where d.status = '4' group by d.doc_id ", 

            userquery.selectquery(tablemap, modalAlias, columnlist, joinrelationtable, wherecondition, columngroupby, '')
                .then((error, result) => {
                    if (error) {
                        return reply({
                            statusCode: 200,
                            error: true,
                            message: error.sqlMessage,
                            data: null
                        });
                    } else {

                        return reply({
                            statusCode: 200,
                            error: false,
                            message: "list of released documents",
                            data: result,
                        });
                    }
                })
            // function (error, result) {
            //         if (error) {
            //             return reply({
            //                 statusCode: 200,
            //                 error: true,
            //                 message: error.sqlMessage,
            //                 data: null
            //             });
            //         } else {

            //             return reply({
            //                 statusCode: 200,
            //                 error: false,
            //                 message: "list of released documents",
            //                 data: result,
            //             });
            //         }
            //}
        )
    },
    auth: {
        strategy: 'token'
    }
};


// edit pending document
exports.updateDocument = {
    validate: {
        payload: {
            doc_id: Joi.string().required(),
            document_type: Joi.string().required(),
            document_category: Joi.string().required(),
            document_name: Joi.string().required(),
            document: Joi.string().required(),
            version_changes: Joi.string().required(),
            share: Joi.string().required()
        }
    },
    handler: function (request, reply) {
        var userid = request.auth.credentials.username
        var doc_id = request.payload.doc_id
        var document_type = request.payload.document_type
        var document_category = request.payload.document_category
        var document_name = request.payload.document_name
        var document = request.payload.document
        var version_changes = request.payload.version_changes
        var share = request.payload.share
        var status
        const tablemap = document_user_role;
        const columnmap = ['link_id', 'doc_id', 'userid', 'role', 'status', 'created_at', 'updated_at'];
        const conditions = {
            userid: '" + userid + "',
            doc_id: '" + doc_id + "',
            role: 'prepare'
        };
        const table = documents;
        const columnlist = [doc_id, 'document_number', document_type, document_category, document_name, document, 'version',
            version_changes, 'release_note', 'release_date', 'effective_implementation', status, 'archived', 'created_at', 'updated_at'
        ]
        const condition = {
            doc_id: '" + doc_id + "',
            status: '0'
        }
        if (share == '1') {
            status = 1
        } else {
            status = 0
        }

        db.query(

            // " select * from document_user_role where userid = '" + userid + "' and doc_id = '" + doc_id + "' and role = 'prepare' ",
            userquery.selectwithcond(table, columnmap, conditions).then((error, result) => {
                if (error) {
                    return reply({
                        statusCode: 200,
                        error: true,
                        message: error.sqlMessage,
                        data: null
                    });
                } else {

                    if (result.length > 0) {
                        db.query(
                            // "select * from documents where doc_id = '" + doc_id + "' and status = '0' "
                            userquery.selectwithcond(tablemap, columnlist, condition).then((err, res) => {
                                if (err) {
                                    return reply({
                                        statusCode: 200,
                                        error: true,
                                        message: err.sqlMessage,
                                        data: null
                                    });
                                } else {
                                    if (res.length > 0) {
                                        const tablename = documents;
                                        const columnname = {
                                            document_type: '" + document_type + "',
                                            document_category: '" + document_category + "',
                                            document_name: '" + document_name + "',
                                            document: '" + document + "',
                                            version_changes: '" + version_changes + "',
                                            status: '" + status + "'
                                        }
                                        const condn = {
                                            doc_id: '" + doc_id + "'
                                        }
                                        db.query(
                                            // " update documents set document_type = '" + document_type + "', document_category = '" + document_category + "', document_name = '" + document_name + "',document = '" + document + "',version_changes = '" + version_changes + "', status = '" + status + "' where doc_id = '" + doc_id + "' ",
                                            userquery.updatemultiple(tablename, columnname, condn).then(e1 => {
                                                if (e1) {
                                                    return reply({
                                                        statusCode: 200,
                                                        error: true,
                                                        message: e1.sqlMessage,
                                                        data: null
                                                    });
                                                } else {
                                                    return reply({
                                                        statusCode: 200,
                                                        error: false,
                                                        message: "Document updated successfully",
                                                        data: result,
                                                    });
                                                }
                                            })
                                            // function (e1) {
                                            // if (e1) {
                                            //     return reply({
                                            //         statusCode: 200,
                                            //         error: true,
                                            //         message: e1.sqlMessage,
                                            //         data: null
                                            //     });
                                            // } else {
                                            //     return reply({
                                            //         statusCode: 200,
                                            //         error: false,
                                            //         message: "Document updated successfully",
                                            //         data: result,
                                            //     });
                                            // }
                                            //}
                                        );
                                    } else {
                                        return reply({
                                            statusCode: 200,
                                            error: true,
                                            message: "Invalid request",
                                            data: null
                                        });
                                    }

                                }
                            })
                            // , function (err, res) {
                            // if (err) {
                            //     return reply({
                            //         statusCode: 200,
                            //         error: true,
                            //         message: err.sqlMessage,
                            //         data: null
                            //     });
                            // } 
                            // else {
                            //     if (res.length > 0) {
                            //         db.query(" update documents set document_type = '" + document_type + "', document_category = '" + document_category + "', document_name = '" + document_name + "',document = '" + document + "',version_changes = '" + version_changes + "', status = '" + status + "' where doc_id = '" + doc_id + "' ", function (e1) {
                            //             if (e1) {
                            //                 return reply({
                            //                     statusCode: 200,
                            //                     error: true,
                            //                     message: e1.sqlMessage,
                            //                     data: null
                            //                 });
                            //             } else {
                            //                 return reply({
                            //                     statusCode: 200,
                            //                     error: false,
                            //                     message: "Document updated successfully",
                            //                     data: result,
                            //                 });
                            //             }
                            //         });
                            //     } else {
                            //         return reply({
                            //             statusCode: 200,
                            //             error: true,
                            //             message: "Invalid request",
                            //             data: null
                            //         });
                            //     }
                            // }
                            //}
                        )
                        // } else {
                        //     return reply({
                        //         statusCode: 200,
                        //         error: true,
                        //         message: "Invalid request, invalid request",
                        //         data: null
                        //     });
                    }
                }
            })
            // function (error, result) {
            // if (error) {
            //     return reply({
            //         statusCode: 200,
            //         error: true,
            //         message: error.sqlMessage,
            //         data: null
            //     });
            // } 
            // else {

            //     if (result.length > 0) {
            //         db.query("select * from documents where doc_id = '" + doc_id + "' and status = '0' ", function (err, res) {
            //             if (err) {
            //                 return reply({
            //                     statusCode: 200,
            //                     error: true,
            //                     message: err.sqlMessage,
            //                     data: null
            //                 });
            //             } else {
            //                 if (res.length > 0) {
            //                     db.query(" update documents set document_type = '" + document_type + "', document_category = '" + document_category + "', document_name = '" + document_name + "',document = '" + document + "',version_changes = '" + version_changes + "', status = '" + status + "' where doc_id = '" + doc_id + "' ", function (e1) {
            //                         if (e1) {
            //                             return reply({
            //                                 statusCode: 200,
            //                                 error: true,
            //                                 message: e1.sqlMessage,
            //                                 data: null
            //                             });
            //                         } else {
            //                             return reply({
            //                                 statusCode: 200,
            //                                 error: false,
            //                                 message: "Document updated successfully",
            //                                 data: result,
            //                             });
            //                         }
            //                     });
            //                 } else {
            //                     return reply({
            //                         statusCode: 200,
            //                         error: true,
            //                         message: "Invalid request",
            //                         data: null
            //                     });
            //                 }
            //             }
            //         })
            //     } else {
            //         return reply({
            //             statusCode: 200,
            //             error: true,
            //             message: "Invalid request, invalid request",
            //             data: null
            //         });
            //     }
            // }
            //}
        )
    },
    auth: {
        strategy: 'token'
    }
};


// edit pending document
exports.uploadDocument = {
    validate: {
        payload: {
            doc_id: Joi.number().required(),
            document: Joi.string().required(),
            version_changes: Joi.string().required(),
            share: Joi.number().required()
        }
    },
    handler: function (request, reply) {
        var userid = request.auth.credentials.username;
        var doc_id = request.payload.doc_id
        var document = request.payload.document
        var version_changes = request.payload.version_changes
        var share = request.payload.share
        var status
        const tablename = document_user_role;
        const columnmap = ['link_id', 'doc_id', 'userid', 'role', 'status', 'created_at', 'updated_at'];
        const condition = [{
            'userid': userid,
            'doc_id': doc_id,
            role: 'prepare'
        }]
        if (share == 1) {
            status = 1
        } else {
            status = 0
        }

        db.query(
            // " select * from document_user_role where userid = '" + userid + "' and doc_id = '" + doc_id + "' and role = 'prepare' ",
            userquery.selectwithcond(tablename, columnmap, condition).then((error, result) => {
                if (error) {
                    return reply({
                        statusCode: 200,
                        error: true,
                        message: error.sqlMessage,
                        data: null
                    });
                } else {

                    if (result.length > 0) {
                        const tablemap = documents;
                        const columnlist = ['link_id', 'doc_id', 'userid', 'role', 'status', 'created_at', 'updated_at'];
                        const condn = {
                            'doc_id': doc_id,
                            'status': 0
                        }

                        db.query(
                            // "select * from documents where doc_id = '" + doc_id + "' and status = '0' ",
                            userquery.selectwithcond(tablemap, columnlist, condn).then((err, res) => {
                                if (err) {
                                    return reply({
                                        statusCode: 200,
                                        error: true,
                                        message: err.sqlMessage,
                                        data: null
                                    });
                                } else {
                                    if (res.length > 0) {
                                        const tblmap = documents;
                                        const colname = {
                                            'document': document,
                                            'version_changes': version_changes,
                                            'status': status
                                        }
                                        const condkey = {
                                            'doc_id': doc_id
                                        }
                                        db.query(
                                            // " update documents set document = '" + document + "',version_changes = '" + version_changes + "', status = '" + status + "' where doc_id = '" + doc_id + "' ",
                                            userquery.updatemultiple(tblmap, colname, condkey).then(e1 => {
                                                if (e1) {
                                                    return reply({
                                                        statusCode: 200,
                                                        error: true,
                                                        message: e1.sqlMessage,
                                                        data: null
                                                    });
                                                } else {
                                                    return reply({
                                                        statusCode: 200,
                                                        error: false,
                                                        message: "Document updated successfully",
                                                        data: result,
                                                    });
                                                }
                                            })
                                            // function (e1) {

                                            // if (e1) {
                                            //     return reply({
                                            //         statusCode: 200,
                                            //         error: true,
                                            //         message: e1.sqlMessage,
                                            //         data: null
                                            //     });
                                            // } else {
                                            //     return reply({
                                            //         statusCode: 200,
                                            //         error: false,
                                            //         message: "Document updated successfully",
                                            //         data: result,
                                            //     });
                                            // }
                                            // }
                                        );
                                    } else {
                                        return reply({
                                            statusCode: 200,
                                            error: true,
                                            message: "Invalid request in",
                                            data: null
                                        });
                                    }
                                }
                            })
                            //  function (err, res) {
                            // if (err) {
                            //     return reply({
                            //         statusCode: 200,
                            //         error: true,
                            //         message: err.sqlMessage,
                            //         data: null
                            //     });
                            // } else {
                            //     if (res.length > 0) {
                            //         db.query(" update documents set document = '" + document + "',version_changes = '" + version_changes + "', status = '" + status + "' where doc_id = '" + doc_id + "' ", function (e1) {
                            //             if (e1) {
                            //                 return reply({
                            //                     statusCode: 200,
                            //                     error: true,
                            //                     message: e1.sqlMessage,
                            //                     data: null
                            //                 });
                            //             } else {
                            //                 return reply({
                            //                     statusCode: 200,
                            //                     error: false,
                            //                     message: "Document updated successfully",
                            //                     data: result,
                            //                 });
                            //             }
                            //         });
                            //     } else {
                            //         return reply({
                            //             statusCode: 200,
                            //             error: true,
                            //             message: "Invalid request in",
                            //             data: null
                            //         });
                            //     }
                            // }
                            // }
                        )
                    } else {
                        return reply({
                            statusCode: 200,
                            error: true,
                            message: "Invalid request",
                            data: null
                        });
                    }
                }
            })
            // function (error, result) {
            // if (error) {
            //     return reply({
            //         statusCode: 200,
            //         error: true,
            //         message: error.sqlMessage,
            //         data: null
            //     });
            // }
            //  else {

            //     if (result.length > 0) {
            //         db.query("select * from documents where doc_id = '" + doc_id + "' and status = '0' ", function (err, res) {
            //             if (err) {
            //                 return reply({
            //                     statusCode: 200,
            //                     error: true,
            //                     message: err.sqlMessage,
            //                     data: null
            //                 });
            //             } else {
            //                 if (res.length > 0) {
            //                     db.query(" update documents set document = '" + document + "',version_changes = '" + version_changes + "', status = '" + status + "' where doc_id = '" + doc_id + "' ", function (e1) {
            //                         if (e1) {
            //                             return reply({
            //                                 statusCode: 200,
            //                                 error: true,
            //                                 message: e1.sqlMessage,
            //                                 data: null
            //                             });
            //                         } else {
            //                             return reply({
            //                                 statusCode: 200,
            //                                 error: false,
            //                                 message: "Document updated successfully",
            //                                 data: result,
            //                             });
            //                         }
            //                     });
            //                 } else {
            //                     return reply({
            //                         statusCode: 200,
            //                         error: true,
            //                         message: "Invalid request in",
            //                         data: null
            //                     });
            //                 }
            //             }
            //         })
            //     } else {
            //         return reply({
            //             statusCode: 200,
            //             error: true,
            //             message: "Invalid request",
            //             data: null
            //         });
            //     }
            // }
            // }
        )
    },
    auth: {
        strategy: 'token'
    }
};


// role wise users list
exports.roleWiseUsers = {
    validate: {
        payload: {
            role: Joi.string().required(),
        }
    },

    handler: function (request, reply) {

        var role = request.payload.role
        //select u.uid, u.userid, u.name, u.email, u.mobile, u.designation, u.department, ur.role from user_roles ur inner join users u on u.userid = ur.userid where role='" + role + "'
        db.query(
            // " SELECT e.emp_id as userid,e.emp_name as name,aur.urid, aur.emp_id, aur.role, aur.display_name,
            //  aur.change_date, aur.upto, cm.module_name, cm.short_code as module_code, cr.role_name
            //   FROM all_user_roles aur inner join employees e on e.emp_id = aur.emp_id INNER JOIN
            //    all_roles ar ON ar.rid = aur.role INNER JOIN config_modules cm ON cm.md_id = ar.module INNER JOIN
            //     config_roles cr ON cr.rol_id = ar.roleid  WHERE cm.module_name='Documentation' and 
            //     cr.role_name='" + role + "' AND ( ( CURDATE() <= aur.change_date AND aur.upto is null ) OR 
            //     ( CURDATE() <= aur.change_date AND aur.upto >= CURDATE() ) OR ( CURDATE() >= aur.change_date AND 
            //     aur.upto >= CURDATE() ) OR ( CURDATE() >= aur.change_date AND aur.upto is null ) ) 
            //     AND ar.status = 1 AND cm.status = 1 AND cr.status = 1 ",
            function (error, result) {
                if (error) {
                    return reply({
                        statusCode: 200,
                        error: true,
                        message: error.sqlMessage,
                        data: null
                    });
                } else {

                    return reply({
                        statusCode: 200,
                        error: false,
                        message: "list of role wise users",
                        data: result,
                    });
                }
            })
    },
    auth: {
        strategy: 'token'
    }
};


// roles list
exports.roles = {

    handler: function (request, reply) {
        const tablemap = roles;
        const columnlist = [role];
        const conditionkey = {
            'role !': mr,
            'role !': prepare
        }
        db.query(
            // " select role from roles where role != 'mr' and role != 'prepare' ",
            userquery.selectwithcond(tablemap, columnlist, conditionkey).then((error, result) => {
                if (error) {
                    return reply({
                        statusCode: 200,
                        error: true,
                        message: error.sqlMessage,
                        data: null
                    });
                } else {

                    return reply({
                        statusCode: 200,
                        error: false,
                        message: "list of roles",
                        data: result,
                    });
                }
            })
            // function (error, result) {
            //     if (error) {
            //         return reply({
            //             statusCode: 200,
            //             error: true,
            //             message: error.sqlMessage,
            //             data: null
            //         });
            //     } else {

            //         return reply({
            //             statusCode: 200,
            //             error: false,
            //             message: "list of roles",
            //             data: result,
            //         });
            //     }
            // }
        )
    },
    auth: {
        strategy: 'token'
    }
};

// link document
exports.linkDocument = {
    validate: {
        payload: {
            doc_id: Joi.number().required(),
            role: Joi.string().required(),
            userid: Joi.string().required()
        }
    },

    handler: function (request, reply) {
        var mr_userid = request.auth.credentials.username;

        var doc_id = request.payload.doc_id
        var role = request.payload.role
        var userid = request.payload.userid

        // return(reply ({user : userid}))

        db.query(
            // " SELECT e.emp_id,aur.urid, aur.emp_id, aur.role, aur.display_name, aur.change_date, aur.upto,
            //  cm.module_name, cm.short_code as module_code, cr.role_name FROM employees e INNER JOIN 
            //  all_user_roles aur ON aur.emp_id = e.emp_id INNER JOIN all_roles ar ON ar.rid = aur.role INNER JOIN 
            //  config_modules cm ON cm.md_id = ar.module INNER JOIN config_roles cr ON cr.rol_id = ar.roleid WHERE 
            //  cm.module_name='Documentation' and  aur.emp_id = '" + mr_userid + "' AND (  ( CURDATE() <= aur.change_date
            //   AND aur.upto is null ) OR ( CURDATE() <= aur.change_date AND aur.upto >= CURDATE() )  OR 
            //    ( CURDATE() >= aur.change_date AND aur.upto >= CURDATE() ) OR ( CURDATE() >= aur.change_date
            //     AND aur.upto is null )  ) ORDER BY aur.urid DESC ",

            function (error, result) {
                if (error) {
                    return reply({
                        statusCode: 200,
                        error: true,
                        message: error.sqlMessage,
                        data: null
                    });
                } else {
                    var roles = [];
                    result.forEach((row) => {
                        roles.push(row.role_name)
                    })
                    if (roles.includes('MR')) {
                        const insertdata = {
                            doc_id,
                            role,
                            userid
                        }
                        db.query(
                            // "insert ignore document_user_role (doc_id,role,userid) 
                            // values ('" + doc_id + "','" + role + "','" + userid + "') ",
                            commonfun.insertTable(document_user_role, insertdata).then((err1) => {
                                if (err1) {
                                    return reply({
                                        statusCode: 200,
                                        error: true,
                                        message: err1.sqlMessage,
                                        data: null
                                    });
                                } else {
                                    return reply({
                                        statusCode: 200,
                                        error: false,
                                        message: "Document linked to specified user successfully",
                                        data: null,
                                    });
                                }
                            }
                                //  function (err1) {
                                // if (err1) {
                                //     return reply({
                                //         statusCode: 200,
                                //         error: true,
                                //         message: err1.sqlMessage,
                                //         data: null
                                //     });
                                // } else {
                                //     return reply({
                                //         statusCode: 200,
                                //         error: false,
                                //         message: "Document linked to specified user successfully",
                                //         data: null,
                                //     });
                                // }
                                // }
                            )

                            // db.query(" SELECT e.emp_id,aur.urid, aur.emp_id, aur.role, aur.display_name, aur.change_date, aur.upto, cm.module_name, cm.short_code as module_code, cr.role_name FROM employees e INNER JOIN all_user_roles aur ON aur.emp_id = e.emp_id INNER JOIN all_roles ar ON ar.rid = aur.role INNER JOIN config_modules cm ON cm.md_id = ar.module INNER JOIN config_roles cr ON cr.rol_id = ar.roleid WHERE cm.module_name='Documentation' and  aur.emp_id = '" + userid + "' AND (  ( CURDATE() <= aur.change_date AND aur.upto is null ) OR ( CURDATE() <= aur.change_date AND aur.upto >= CURDATE() )  OR  ( CURDATE() >= aur.change_date AND aur.upto >= CURDATE() ) OR ( CURDATE() >= aur.change_date AND aur.upto is null )  ) ORDER BY aur.urid DESC ", function (err, res, fld) {
                            //     if (err) {
                            //         return reply({
                            //             statusCode: 200,
                            //             error: true,
                            //             message: err.sqlMessage,
                            //             data: null
                            //         });
                            //     } else {
                            //         var rl = [];
                            //         res.forEach((row) => {
                            //             rl.push(row.role_name)
                            //         })
                            //         if (rl.includes(role)) {
                            //             db.query("insert ignore document_user_role (doc_id,role,userid) values ('" + doc_id + "','" + role + "','" + userid + "') ", function (err1, res1, fld1) {
                            //                 if (err1) {
                            //                     return reply({
                            //                         statusCode: 200,
                            //                         error: true,
                            //                         message: err1.sqlMessage,
                            //                         data: null
                            //                     });
                            //                 } else {
                            //                     return reply({
                            //                         statusCode: 200,
                            //                         error: false,
                            //                         message: "Document linked to specified user successfully",
                            //                         data: null,
                            //                     });
                            //                 }
                            //             })
                            //         } else {
                            //             return reply({
                            //                 statusCode: 200,
                            //                 error: true,
                            //                 message: "Invalid/unautherized request",
                            //                 data: null
                            //             });
                            //         }
                            //     }
                            // }
                        )
                    } else {
                        return reply({
                            statusCode: 200,
                            error: true,
                            message: "Invalid/unautherized request",
                            data: null
                        });
                    }
                }
            })
    },
    auth: {
        strategy: 'token'
    }
};


// review/approve/release suggestions
exports.suggestions = {
    validate: {
        payload: {
            doc_id: Joi.string().required(),
            role: Joi.string().required(),
            userid: Joi.string().required(),

            suggestion: Joi.string().required(),
            forward: Joi.number().required(),
        }
    },
    handler: function (request, reply) {
        // var call_user = request.auth.credentials.username;
        const tablemap = document_user_role;
        const conditionkey = {
            'role': role,
            'userid': userid,
            'doc_id': doc_id
        }
        var doc_id = request.payload.doc_id
        var role = request.payload.role
        var userid = request.payload.userid
        var forward = request.payload.forward
        var suggestion = request.payload.suggestion
        var status = forward

        // if (forward == '1') {
        //     if (role == 'Review') {
        //         status = 2
        //     } else {
        //         status = 3
        //     }
        // }

        db.query(
            // " select link_id from document_user_role where 
            // role = '" + role + "' and userid = '" + userid + "' and doc_id = '" + doc_id + "' ", 
            userquery.selectwithcond(tablemap, 'link_id', conditionkey).then((error, result) => {
                if (error) {
                    return reply({
                        statusCode: 200,
                        error: true,
                        message: error.sqlMessage,
                        data: null
                    });
                } else {
                    if (result.length > 0) {
                        var link_id = result[0].link_id
                        db.query("insert into suggestions (link_id,suggestion) values ('" + link_id + "','" + suggestion + "')", function (err) {
                            if (err) {
                                return reply({
                                    statusCode: 200,
                                    error: true,
                                    message: err.sqlMessage,
                                    data: null
                                });
                            } else {
                                db.query("update documents set status = '" + status + "' where doc_id = '" + doc_id + "' ", function (err1) {
                                    if (err1) {
                                        return reply({
                                            statusCode: 200,
                                            error: true,
                                            message: err1.sqlMessage,
                                            data: null
                                        });
                                    } else {
                                        return reply({
                                            statusCode: 200,
                                            error: false,
                                            message: "Document return back with " + role + " suggestion",
                                            data: result,
                                        });
                                    }
                                })
                            }
                        })
                    } else {
                        return reply({
                            statusCode: 200,
                            error: true,
                            message: "Invalid/Unautherized request",
                            data: null
                        });
                    }
                }
            })
            // function (error, result) {
            // if (error) {
            //     return reply({
            //         statusCode: 200,
            //         error: true,
            //         message: error.sqlMessage,
            //         data: null
            //     });
            // } 
            // else {
            //     if (result.length > 0) {
            //         var link_id = result[0].link_id
            //         db.query("insert into suggestions (link_id,suggestion) values ('" + link_id + "','" + suggestion + "')", function (err) {
            //             if (err) {
            //                 return reply({
            //                     statusCode: 200,
            //                     error: true,
            //                     message: err.sqlMessage,
            //                     data: null
            //                 });
            //             } else {
            //                 db.query("update documents set status = '" + status + "' where doc_id = '" + doc_id + "' ", function (err1) {
            //                     if (err1) {
            //                         return reply({
            //                             statusCode: 200,
            //                             error: true,
            //                             message: err1.sqlMessage,
            //                             data: null
            //                         });
            //                     } else {
            //                         return reply({
            //                             statusCode: 200,
            //                             error: false,
            //                             message: "Document return back with " + role + " suggestion",
            //                             data: result,
            //                         });
            //                     }
            //                 })
            //             }
            //         })
            //     } else {
            //         return reply({
            //             statusCode: 200,
            //             error: true,
            //             message: "Invalid/Unautherized request",
            //             data: null
            //         });
            //     }
            // }
            // }
        )
    },
    auth: {
        strategy: 'token'
    }
};

// release document 
exports.releaseDocumentOld = {
    validate: {
        payload: {
            doc_id: Joi.number().required(),
            version: Joi.string().required(),
            release_date: Joi.string().required(),
            effective_implementation: Joi.string().required()
        }
    },
    handler: function (request, reply) {
        var mr_userid = request.auth.credentials.username;
        var doc_id = request.payload.doc_id
        var version = request.payload.version
        var release_date = request.payload.release_date
        var effective_implementation = request.payload.effective_implementation
        const tablemap = user_roles;
        const conditionkey = {
            'userid': mr_userid
        }
        db.query(
            // " select role from user_roles where userid = '" + mr_userid + "' ",
            userquery.selectwithcond(tablemap, 'role', conditionkey).then((error, result) => {
                if (error) {
                    return reply({
                        statusCode: 200,
                        error: true,
                        message: error.sqlMessage,
                        data: null
                    });
                } else {
                    var roles = [];
                    result.forEach((row) => {
                        roles.push(row.role)
                    })
                    if (roles.includes('mr')) {
                        const table = documents;
                        const conditionkey = {
                            'doc_id': doc_id
                        }
                        db.query(
                            // " select status from documents where doc_id = '" + doc_id + "' ",
                            userquery.selectwithcond(table, status, conditionkey).then((err, res) => {
                                if (err) {
                                    return reply({
                                        statusCode: 200,
                                        error: true,
                                        message: err.sqlMessage,
                                        data: null
                                    });
                                } else {
                                    if (res.length > 0 && res[0].status == 3) {
                                        const tblemap = documents;
                                        const colname = {
                                            'version': version,
                                            'release_date': release_date,
                                            'effective_implementation': effective_implementation,
                                            'status': 4
                                        }
                                        const condkey = {
                                            'doc_id': doc_id
                                        }
                                        db.query(
                                            // " update documents set version = '" + version + "', release_date = '" + release_date + "',
                                            //  effective_implementation = '" + effective_implementation + "', status = 4 where doc_id = '" + doc_id + "' ",
                                            userquery.updatemultiple(tblemap, colname, condkey).then(err1 => {
                                                if (err1) {
                                                    return reply({
                                                        statusCode: 200,
                                                        error: true,
                                                        message: err1.sqlMessage,
                                                        data: null
                                                    });
                                                } else {
                                                    return reply({
                                                        statusCode: 200,
                                                        error: false,
                                                        message: "Document released successfully",
                                                        data: result,
                                                    });
                                                }
                                            })

                                            // function (err1) {
                                            // if (err1) {
                                            //     return reply({
                                            //         statusCode: 200,
                                            //         error: true,
                                            //         message: err1.sqlMessage,
                                            //         data: null
                                            //     });
                                            // } else {
                                            //     return reply({
                                            //         statusCode: 200,
                                            //         error: false,
                                            //         message: "Document released successfully",
                                            //         data: result,
                                            //     });
                                            // }
                                            // }
                                        )
                                    } else {
                                        return reply({
                                            statusCode: 200,
                                            error: true,
                                            message: "Invalid/Unautherized request",
                                            data: null
                                        });
                                    }
                                }
                            })
                            // function (err, res) {
                            // if (err) {
                            //     return reply({
                            //         statusCode: 200,
                            //         error: true,
                            //         message: err.sqlMessage,
                            //         data: null
                            //     });
                            // } else {
                            //     if (res.length > 0 && res[0].status == 3) {
                            //         db.query(" update documents set version = '" + version + "', release_date = '" + release_date + "', effective_implementation = '" + effective_implementation + "', status=4 where doc_id = '" + doc_id + "' ", function (err1) {
                            //             if (err1) {
                            //                 return reply({
                            //                     statusCode: 200,
                            //                     error: true,
                            //                     message: err1.sqlMessage,
                            //                     data: null
                            //                 });
                            //             } else {
                            //                 return reply({
                            //                     statusCode: 200,
                            //                     error: false,
                            //                     message: "Document released successfully",
                            //                     data: result,
                            //                 });
                            //             }
                            //         })
                            //     } else {
                            //         return reply({
                            //             statusCode: 200,
                            //             error: true,
                            //             message: "Invalid/Unautherized request",
                            //             data: null
                            //         });
                            //     }
                            // }
                            // }
                        )
                    } else {
                        return reply({
                            statusCode: 200,
                            error: true,
                            message: "Invalid/Unautherized request",
                            data: null
                        });
                    }

                }
            })
            //function (error, result) {
            // if (error) {
            //     return reply({
            //         statusCode: 200,
            //         error: true,
            //         message: error.sqlMessage,
            //         data: null
            //     });
            // } else {
            //     var roles = [];
            //     result.forEach((row) => {
            //         roles.push(row.role)
            //     })
            //     if (roles.includes('mr')) {
            //         db.query(" select status from documents where doc_id = '" + doc_id + "' ", function (err, res) {
            //             if (err) {
            //                 return reply({
            //                     statusCode: 200,
            //                     error: true,
            //                     message: err.sqlMessage,
            //                     data: null
            //                 });
            //             } else {
            //                 if (res.length > 0 && res[0].status == 3) {
            //                     db.query(" update documents set version = '" + version + "', release_date = '" + release_date + "', effective_implementation = '" + effective_implementation + "', status=4 where doc_id = '" + doc_id + "' ", function (err1) {
            //                         if (err1) {
            //                             return reply({
            //                                 statusCode: 200,
            //                                 error: true,
            //                                 message: err1.sqlMessage,
            //                                 data: null
            //                             });
            //                         } else {
            //                             return reply({
            //                                 statusCode: 200,
            //                                 error: false,
            //                                 message: "Document released successfully",
            //                                 data: result,
            //                             });
            //                         }
            //                     })
            //                 } else {
            //                     return reply({
            //                         statusCode: 200,
            //                         error: true,
            //                         message: "Invalid/Unautherized request",
            //                         data: null
            //                     });
            //                 }
            //             }
            //         })
            //     } else {
            //         return reply({
            //             statusCode: 200,
            //             error: true,
            //             message: "Invalid/Unautherized request",
            //             data: null
            //         });
            //     }

            // }
            // }
        )
    },
    auth: {
        strategy: 'token'
    }
};

// release document 
exports.releaseDocument = {
    validate: {
        payload: {
            doc_id: Joi.number().required(),
            document_name: Joi.number().required(),
            document_category: Joi.number().required(),
            document_type: Joi.number().required(),
            version: Joi.string().required(),
            release_note: Joi.string().required(),
            start_date: Joi.string().required()
        }
    },
    handler: function (request, reply) {
        var mr_userid = request.auth.credentials.username;
        var doc_id = request.payload.doc_id
        var document_name = request.payload.document_name
        var document_category = request.payload.document_category
        var document_type = request.payload.document_type
        var version = request.payload.version
        var release_note = request.payload.release_note
        var effective_implementation = request.payload.start_date
        const tablemap = user_roles;
        const condition = {
            'userid': mr_userid
        };
        const table = documents;
        const colname = {
            'version': version,
            'release_date': now(),
            'release_note': release_note,
            'effective_implementation': effective_implementation,
            'status': 4
        }
        const condkey = {
            'doc_id': doc_id
        }
        db.query(
            //" select role from user_roles where userid = '" + mr_userid + "' ", 
            userquery.selectwithcond(tablemap, role, condition).then((error, result) => {
                if (error) {
                    return reply({
                        statusCode: 200,
                        error: true,
                        message: error.sqlMessage,
                        data: null
                    });
                } else {
                    var roles = [];
                    result.forEach((row) => {
                        roles.push(row.role)
                    })
                    if (roles.includes('mr')) {
                        db.query(" select status from documents where doc_id = '" + doc_id + "' ", function (err, res) {
                            if (err) {
                                return reply({
                                    statusCode: 200,
                                    error: true,
                                    message: err.sqlMessage,
                                    data: null
                                });
                            } else {
                                if (res.length > 0 && res[0].status == 3) {
                                    const tablename = documents;
                                    const condn = {
                                        'document_name': document_name,
                                        'document_category': document_category,
                                        'document_type': document_type,
                                        'doc_id !': doc_id
                                    }
                                    db.query(
                                        // " select doc_id from documents where document_name = '" + document_name + "'
                                        //  and document_category = '" + document_category + "' and document_type = '" + document_type + "' 
                                        //  and doc_id != '" + doc_id + "' ",
                                        userquery.selectwithcond(tablename, 'doc_id', condn).then(err1 => {
                                            if (err1) {
                                                return reply({
                                                    statusCode: 200,
                                                    error: true,
                                                    message: err1.sqlMessage,
                                                    data: null
                                                });
                                            } else {
                                                return reply({
                                                    statusCode: 200,
                                                    error: false,
                                                    message: "Document released successfully",
                                                    data: result,
                                                });
                                            }
                                        })
                                        //      function () {

                                        // }
                                    )
                                    db.query(
                                        // " update documents set version = '" + version + "', release_date = now(),
                                        //  release_note = '" + release_note + "', effective_implementation = '" + effective_implementation + "',
                                        //   status=4 where doc_id = '" + doc_id + "' ",

                                        userquery.updatemultiple(table, colname, condkey).then(err1 => {
                                            if (err1) {
                                                return reply({
                                                    statusCode: 200,
                                                    error: true,
                                                    message: err1.sqlMessage,
                                                    data: null
                                                });
                                            } else {
                                                return reply({
                                                    statusCode: 200,
                                                    error: false,
                                                    message: "Document released successfully",
                                                    data: result,
                                                });
                                            }
                                        })
                                        //  function (err1) {
                                        // if (err1) {
                                        //     return reply({
                                        //         statusCode: 200,
                                        //         error: true,
                                        //         message: err1.sqlMessage,
                                        //         data: null
                                        //     });
                                        // } else {
                                        //     return reply({
                                        //         statusCode: 200,
                                        //         error: false,
                                        //         message: "Document released successfully",
                                        //         data: result,
                                        //     });
                                        // }
                                        //  }
                                    )
                                } else {
                                    return reply({
                                        statusCode: 200,
                                        error: true,
                                        message: "Invalid/Unautherized request",
                                        data: null
                                    });
                                }
                            }
                        })
                    } else {
                        return reply({
                            statusCode: 200,
                            error: true,
                            message: "Invalid/Unautherized request",
                            data: null
                        });
                    }

                }
            })
            // function (error, result) {
            // if (error) {
            //     return reply({
            //         statusCode: 200,
            //         error: true,
            //         message: error.sqlMessage,
            //         data: null
            //     });
            // } else {
            //     var roles = [];
            //     result.forEach((row) => {
            //         roles.push(row.role)
            //     })
            //     if (roles.includes('mr')) {
            //         db.query(" select status from documents where doc_id = '" + doc_id + "' ", function (err, res) {
            //             if (err) {
            //                 return reply({
            //                     statusCode: 200,
            //                     error: true,
            //                     message: err.sqlMessage,
            //                     data: null
            //                 });
            //             } else {
            //                 if (res.length > 0 && res[0].status == 3) {
            //                     db.query(" select doc_id from documents where document_name = '" + document_name + "' and document_category = '" + document_category + "' and document_type = '" + document_type + "' and doc_id != '" + doc_id + "' ", function () {

            //                     })
            //                     db.query(" update documents set version = '" + version + "', release_date = now(), release_note = '" + release_note + "', effective_implementation = '" + effective_implementation + "', status=4 where doc_id = '" + doc_id + "' ", function (err1) {
            //                         if (err1) {
            //                             return reply({
            //                                 statusCode: 200,
            //                                 error: true,
            //                                 message: err1.sqlMessage,
            //                                 data: null
            //                             });
            //                         } else {
            //                             return reply({
            //                                 statusCode: 200,
            //                                 error: false,
            //                                 message: "Document released successfully",
            //                                 data: result,
            //                             });
            //                         }
            //                     })
            //                 } else {
            //                     return reply({
            //                         statusCode: 200,
            //                         error: true,
            //                         message: "Invalid/Unautherized request",
            //                         data: null
            //                     });
            //                 }
            //             }
            //         })
            //     } else {
            //         return reply({
            //             statusCode: 200,
            //             error: true,
            //             message: "Invalid/Unautherized request",
            //             data: null
            //         });
            //     }

            // }
            // }
        )
    },
    auth: {
        strategy: 'token'
    }
};


// list document users by roles 
exports.documentUsersByRoles = {
    validate: {
        payload: {
            doc_id: Joi.number().required()
        }
    },
    handler: function (request, reply) {
        var doc_id = request.payload.doc_id
        const modelname = document_user_role;
        const columnlist = ['dr.doc_id', 'dr.userid', 'dr.role', 'e.emp_name', 'e.email', 'e.contact1 as phone']
        const joinrelationtable = employees;
        const wherecondition = {
            'dr.doc_': doc_id
        }
        db.query( /*" SELECT  cr.role_name as role,e.emp_id,aur'.urid, e.emp_name, aur.display_name, aur.change_date, aur.upto, cm.module_name, cm.short_code as module_code, cr.role_name,( SELECT d.fullname from departments d INNER JOIN employee_structure es ON es.department = d.short_name WHERE e.emp_id = es.emp_id AND CURRENT_DATE() >= date_format(es.change_date,'%y-%m-%s') ORDER BY es.es_id   DESC LIMIT 1 ) as department FROM employees e INNER JOIN all_user_roles aur ON aur.emp_id = e.emp_id INNER JOIN all_roles ar ON ar.rid = aur.role INNER JOIN config_modules cm ON cm.md_id = ar.module INNER JOIN config_roles cr ON cr.rol_id = ar.roleid inner join document_user_role dur  on dur.userid = e.emp_id WHERE  cm.module_name='Documentation' and  dur.doc_id = '" + doc_id + "' AND (  ( CURDATE() <= aur.change_date AND aur.upto is null ) OR ( CURDATE() <= aur.change_date AND aur.upto >= CURDATE() )  OR  ( CURDATE() >= aur.change_date AND aur.upto >= CURDATE() ) OR ( CURDATE() >= aur.change_date AND aur.upto is null )  ) ORDER BY aur.urid DESC "*/
            // "select dr.doc_id, dr.userid, dr.role, e.emp_name, e.email, e.contact1 as phone from 
            //document_user_role dr inner join employees e on e.emp_id = dr.userid where  = '" + doc_id + "'",
            userquery.selectquery(tablemap, modelname, columnlist, joinrelationtable, wherecondition, '', '').then((error, result) => {
                if (error) {
                    return reply({
                        statusCode: 200,
                        error: true,
                        message: error.sqlMessage,
                        data: null
                    });
                } else {
                    var prepare = [],
                        review = [],
                        approve = []

                    result.forEach((row) => {
                        if (row.role == 'Prepare') {
                            prepare.push(row)
                        } else if (row.role == 'Review') {
                            review.push(row)
                        } else if (row.role == 'Approve') {
                            approve.push(row)
                        }
                    })

                    var ret = {}
                    ret.prepare = prepare
                    ret.review = review
                    ret.approve = approve

                    return reply({
                        statusCode: 200,
                        error: false,
                        message: "list of role wise document users",
                        data: ret,
                    });
                }
            })


            //function (error, result) {
            // if (error) {
            //     return reply({
            //         statusCode: 200,
            //         error: true,
            //         message: error.sqlMessage,
            //         data: null
            //     });
            // } else {
            //     var prepare = [],
            //         review = [],
            //         approve = []

            //     result.forEach((row) => {
            //         if (row.role == 'Prepare') {
            //             prepare.push(row)
            //         } else if (row.role == 'Review') {
            //             review.push(row)
            //         } else if (row.role == 'Approve') {
            //             approve.push(row)
            //         }
            //     })

            //     var ret = {}
            //     ret.prepare = prepare
            //     ret.review = review
            //     ret.approve = approve

            //     return reply({
            //         statusCode: 200,
            //         error: false,
            //         message: "list of role wise document users",
            //         data: ret,
            //     });
            //}
            // }
        )
    },
    auth: {
        strategy: 'token'
    }
};


// list document users by roles 
// exports.documentById = {
//     validate: {
//         payload: {
//             doc_id: Joi.number().required()
//         }
//     },
//     handler: async function (request, reply) {
//         var doc_id = request.payload.doc_id

//         await db.query(" select status, document, document_name from documents where doc_id = '" + doc_id + "' ", async function (error, result, fields) {
//             if (error) {
//                 return reply({
//                     statusCode: 200,
//                     error: true,
//                     message: error.sqlMessage,
//                     data: null
//                 });
//             } else {

//                 if (result[0].document) {

//                     now = new Date();
//                     var pdfbase64 = result[0].document
//                     var document_name = result[0].document_name
//                     var status = result[0].status, watermark_text, clr, name

//                     switch (status) {
//                         case 0:
//                             watermark_text = 'Pending'
//                             clr = 'rgba(228, 153, 41, 0.40)'
//                             name = document_name + '_Pending_' + dateFormat(now, 'yyyy-mm-dd_HH-MM')
//                             break;
//                         case 1:
//                             watermark_text = 'Prepared'
//                             clr = 'rgba(228, 153, 41, 0.40)'
//                             name = document_name + '_Prepared_' + dateFormat(now, 'yyyy-mm-dd_HH-MM')
//                             break;
//                         case 2:
//                             watermark_text = 'Reviewed'
//                             clr = 'rgba(228, 153, 41, 0.40)'
//                             name = document_name + '_Reviewed_' + dateFormat(now, 'yyyy-mm-dd_HH-MM')
//                             break;
//                         case 3:
//                             watermark_text = 'Approved'
//                             clr = 'rgba(228, 153, 41, 0.40)'
//                             name = document_name + '_Approved_' + dateFormat(now, 'yyyy-mm-dd_HH-MM')
//                             break;
//                         case 4:
//                             watermark_text = 'Released'
//                             clr = 'rgba(41, 168, 228, 0.40)'
//                             name = document_name
//                             break;

//                         default:
//                             break;
//                     }

//                     // document_name = 'test1';
//                     var paths = 'temp/';

//                     await base64.decode(pdfbase64, paths + document_name + '.pdf', async function (err, output) {
//                         if (err) {
//                             console.log('ttttttt');

//                             return reply(err)
//                         } else {
//                             console.log('success')
//                             // await test(document_name, watermark_text, clr, name);
//                             if (status != 4) {

//                                 console.log(paths + name);

//                                 //     var option = {'text' : 'sample watermark','color': 'black', 'align': 'dia1', 'dstPath':  'temp/sample.jpg'};
//                                 //  watermark.embedWatermarkWithCb('temp/sample.jpg', option, function(err) {
//                                 //         if (!err)
//                                 //             console.log('Succefully embeded watermark');
//                                 //             else console.log(err);

//                                 //     });

//                                 await watermark.embedWatermarkWithCb(paths + document_name + '.pdf', { 'text': watermark_text, 'color': clr, 'align': 'dia1', 'dstPath': paths + name + '.pdf' }, e => {
//                                     base64.encode(paths + name + '.pdf', function (err1, base64String) {
//                                         console.log('return success')
//                                         if (err1) {
//                                             return reply(err1)
//                                         } else {
//                                             return reply({
//                                                 statusCode: 200,
//                                                 error: false,
//                                                 message: "Document by id",
//                                                 data: base64String,
//                                             });
//                                         }
//                                     });
//                                 });
//                             }
//                             else {
//                                await base64.encode(paths + name + '.pdf', function (err1, base64String) {
//                                     console.log('return success')
//                                     if (err1) {
//                                         return reply(err1)
//                                     } else {
//                                         return reply({
//                                             statusCode: 200,
//                                             error: false,
//                                             message: "Document by id",
//                                             data: base64String,
//                                         });
//                                     }
//                                 });
//                             }



//                         }
//                     });
//                 }
//             }
//         })
//     },
//     auth: { strategy: 'token' }
// }
exports.documentById = {
    validate: {
        payload: {
            doc_id: Joi.number().required()
        }
    },
    handler: function (request, reply) {
        var doc_id = request.payload.doc_id
        const tablemap = documents;
        const columnlist = ['status', 'document', 'document_name'];
        const condition = {
            'doc_id': doc_id
        }


        db.query(
            // " select status, document, document_name from documents where doc_id = '" + doc_id + "' ",
            userquery.selectwithcond(tablemap, columnlist, condition).then((error, result) => {
                if (error) {
                    return reply({
                        statusCode: 200,
                        error: true,
                        message: error.sqlMessage,
                        data: null
                    });
                } else {

                    if (result[0].document) {

                        var now = new Date();
                        var pdfbase64 = result[0].document
                        var document_name = result[0].document_name
                        var status = result[0].status,
                            watermark_text, clr, name

                        switch (status) {
                            case 0:
                                watermark_text = 'Pending'
                                clr = 'rgba(228, 153, 41, 0.40)'
                                name = document_name + '_Pending_' + dateFormat(now, 'yyyy-mm-dd_HH-MM')
                                break;
                            case 1:
                                watermark_text = 'Prepared'
                                clr = 'rgba(228, 153, 41, 0.40)'
                                name = document_name + '_Prepared_' + dateFormat(now, 'yyyy-mm-dd_HH-MM')
                                break;
                            case 2:
                                watermark_text = 'Reviewed'
                                clr = 'rgba(228, 153, 41, 0.40)'
                                name = document_name + '_Reviewed_' + dateFormat(now, 'yyyy-mm-dd_HH-MM')
                                break;
                            case 3:
                                watermark_text = 'Approved'
                                clr = 'rgba(228, 153, 41, 0.40)'
                                name = document_name + '_Approved_' + dateFormat(now, 'yyyy-mm-dd_HH-MM')
                                break;
                            case 4:
                                watermark_text = 'Released'
                                clr = 'rgba(41, 168, 228, 0.40)'
                                name = document_name
                                break;

                            default:
                                break;
                        }


                        base64.decode(pdfbase64, config.documents_upload_foler + document_name + '.pdf', function (err) {
                            if (err) {
                                return reply(err)
                            } else {
                                //  console.log('success')

                                // await test(document_name, watermark_text, clr, name);
                                if (status != 4) {

                                    //   console.log(config.documents_upload_foler + document_name + '.pdf =>  fileeeee');
                                    //return(reply (doc_id+ 1))
                                    watermark.embedWatermarkWithCb(config.documents_upload_foler + document_name + '.pdf', {
                                        'text': watermark_text,
                                        'color': clr,
                                        'align': 'dia1',
                                        'dstPath': config.documents_upload_foler + name + '.pdf'
                                    }, () => {

                                        base64.encode(config.documents_upload_foler + name + '.pdf', function (err1, base64String) {
                                            //console.log('return success')
                                            if (err1) {
                                                return reply(err1)
                                            } else {
                                                return reply({
                                                    statusCode: 200,
                                                    error: false,
                                                    message: "Document by id",
                                                    data: base64String,
                                                });
                                            }
                                        });
                                    });
                                } else {

                                    base64.encode(config.documents_upload_foler + name + '.pdf', function (err1, base64String) {
                                        // console.log('return success')
                                        if (err1) {
                                            return reply(err1)
                                        } else {
                                            return reply({
                                                statusCode: 200,
                                                error: false,
                                                message: "Document by id",
                                                data: base64String,
                                            });
                                        }
                                    });
                                }



                            }
                        });
                    }
                }
            })
            //function (error, result) {
            // if (error) {
            //     return reply({
            //         statusCode: 200,
            //         error: true,
            //         message: error.sqlMessage,
            //         data: null
            //     });
            // } else {

            //     if (result[0].document) {

            //         var now = new Date();
            //         var pdfbase64 = result[0].document
            //         var document_name = result[0].document_name
            //         var status = result[0].status,
            //             watermark_text, clr, name

            //         switch (status) {
            //             case 0:
            //                 watermark_text = 'Pending'
            //                 clr = 'rgba(228, 153, 41, 0.40)'
            //                 name = document_name + '_Pending_' + dateFormat(now, 'yyyy-mm-dd_HH-MM')
            //                 break;
            //             case 1:
            //                 watermark_text = 'Prepared'
            //                 clr = 'rgba(228, 153, 41, 0.40)'
            //                 name = document_name + '_Prepared_' + dateFormat(now, 'yyyy-mm-dd_HH-MM')
            //                 break;
            //             case 2:
            //                 watermark_text = 'Reviewed'
            //                 clr = 'rgba(228, 153, 41, 0.40)'
            //                 name = document_name + '_Reviewed_' + dateFormat(now, 'yyyy-mm-dd_HH-MM')
            //                 break;
            //             case 3:
            //                 watermark_text = 'Approved'
            //                 clr = 'rgba(228, 153, 41, 0.40)'
            //                 name = document_name + '_Approved_' + dateFormat(now, 'yyyy-mm-dd_HH-MM')
            //                 break;
            //             case 4:
            //                 watermark_text = 'Released'
            //                 clr = 'rgba(41, 168, 228, 0.40)'
            //                 name = document_name
            //                 break;

            //             default:
            //                 break;
            //         }


            //         base64.decode(pdfbase64, config.documents_upload_foler + document_name + '.pdf', function (err) {
            //             if (err) {
            //                 return reply(err)
            //             } else {
            //                 //  console.log('success')

            //                 // await test(document_name, watermark_text, clr, name);
            //                 if (status != 4) {

            //                     //   console.log(config.documents_upload_foler + document_name + '.pdf =>  fileeeee');
            //                     //return(reply (doc_id+ 1))
            //                     watermark.embedWatermarkWithCb(config.documents_upload_foler + document_name + '.pdf', {
            //                         'text': watermark_text,
            //                         'color': clr,
            //                         'align': 'dia1',
            //                         'dstPath': config.documents_upload_foler + name + '.pdf'
            //                     }, () => {

            //                         base64.encode(config.documents_upload_foler + name + '.pdf', function (err1, base64String) {
            //                             //console.log('return success')
            //                             if (err1) {
            //                                 return reply(err1)
            //                             } else {
            //                                 return reply({
            //                                     statusCode: 200,
            //                                     error: false,
            //                                     message: "Document by id",
            //                                     data: base64String,
            //                                 });
            //                             }
            //                         });
            //                     });
            //                 } else {

            //                     base64.encode(config.documents_upload_foler + name + '.pdf', function (err1, base64String) {
            //                         // console.log('return success')
            //                         if (err1) {
            //                             return reply(err1)
            //                         } else {
            //                             return reply({
            //                                 statusCode: 200,
            //                                 error: false,
            //                                 message: "Document by id",
            //                                 data: base64String,
            //                             });
            //                         }
            //                     });
            //                 }



            //             }
            //         });
            //     }
            // }
            // }
        )
    },
    auth: {
        strategy: 'token'
    }
}

// try {
//     fs.unlink(paths + document_name + '.pdf')
//     fs.unlink('temp/' + name + '.pdf')
// } catch (err) {
//     // handle the error
//     console.log(err)
// }




// shared document link status
exports.docsLinkStatus = {
    validate: {
        payload: {
            check_role: Joi.string().required()
        }
    },
    handler: function (request, reply) {
        var mr_userid = request.auth.credentials.username
        var check_role = request.payload.check_role // review or approve
        // var st
        if (check_role == 'Review') {
            // st = 2
        } else {
            // st = 3
        }
        db.query(
            //" SELECT e.emp_id,aur.urid, aur.emp_id, aur.role, aur.display_name, aur.change_date, aur.upto,
            //  cm.module_name, cm.short_code as module_code, cr.role_name as role FROM employees e INNER JOIN all_user_roles aur ON
            //   aur.emp_id = e.emp_id INNER JOIN all_roles ar ON ar.rid = aur.role INNER JOIN config_modules cm ON cm.md_id = ar.module 
            //   INNER JOIN config_roles cr ON cr.rol_id = ar.roleid WHERE cm.module_name='Documentation' and  aur.emp_id = '" + 
            //   mr_userid + "' AND (  ( CURDATE() <= aur.change_date AND aur.upto is null ) OR ( CURDATE() <= aur.change_date
            //    AND aur.upto >= CURDATE() )  OR  ( CURDATE() >= aur.change_date AND aur.upto >= CURDATE() ) OR ( CURDATE() >=
            //     aur.change_date AND aur.upto is null )  ) ORDER BY aur.urid DESC ",

            function (error, result) {
                if (error) {
                    return reply({
                        statusCode: 200,
                        error: true,
                        message: error.sqlMessage,
                        data: null
                    });
                } else {
                    var roles = [];
                    result.forEach((row) => {
                        roles.push(row.role)
                    })
                    if (roles.includes('MR')) {
                        const tablemap = document_user_role;
                        const modalAlias = ['dur', 'u', 'name', 'mobile'];
                        const columnlist = ['dur.doc_id', 'dur.role', 'u.userid', 'u.emp_name as name', 'u.email', 'u.contact1 as mobile', 'u.department', 'u.designation'];
                        const joinrelationtable = [employees, documents];
                        const wherecondition = {
                            'dur.role': check_role
                        }

                        db.query(
                            // " select dur.doc_id,dur.role,u.userid,u.emp_name as name,u.email,u.contact1 as mobile,
                            // u.department,u.designation from document_user_role dur inner join employees u on
                            //  u.userid = dur.userid inner join documents d on d.doc_id = dur.doc_id where
                            //   dur.role = '" + check_role + "'  ",
                            userquery.selectquery(tablemap, modalAlias, columnlist, joinrelationtable, wherecondition, '', '').then((errr, res) => {
                                if (err) {
                                    return reply({
                                        statusCode: 200,
                                        error: true,
                                        message: err.sqlMessage,
                                        data: null
                                    });
                                } else {
                                    return reply({
                                        statusCode: 200,
                                        error: false,
                                        message: "list of connected users",
                                        data: res,
                                    });
                                }
                            })
                            // function (err, res) {
                            // and d.status = '"+ st +"'
                            // if (err) {
                            //     return reply({
                            //         statusCode: 200,
                            //         error: true,
                            //         message: err.sqlMessage,
                            //         data: null
                            //     });
                            // } else {
                            //     return reply({
                            //         statusCode: 200,
                            //         error: false,
                            //         message: "list of connected users",
                            //         data: res,
                            //     });
                            // }
                            //}
                        )
                    } else {
                        return reply({
                            statusCode: 200,
                            error: true,
                            message: "Invalid/Unautherized request",
                            data: null
                        });
                    }
                }
            })
    },
    auth: {
        strategy: 'token'
    }
};



exports.documentData = {
    validate: {
        payload: {
            doc_id: Joi.number().required()
        }
    },
    handler: function (request, reply) {
        var userid = request.auth.credentials.username
        var doc_id = request.payload.doc_id
        const tablemap = documents;
        const columnlist = ['d.doc_id', 'd.document_number as document_id', 'd.document_category', 'd.document_type', 'd.document_name',
            'd.version', 'd.release_date', 'd.version_changes', 'd.status', 'd.created_at', 'd.updated_at', 'da.userid as approver',
            'dr.userid as reviewer', 'dp.userid as writer'
        ];
        const joinrelationtable = [document_user_role];
        const conditionkey = { 'd.doc_id': doc_id, 'd.status': 4, 'da.userid': userid }
      
        /* select d.doc_id, d.document_number as document_id, d.document_category, d.document_type, d.document_name, d.version, d.release_date, d.version_changes, d.status from documents d left join document_user_role da on da.doc_id = d.doc_id and da.role = 'Approve' left join document_user_role dp on dp.doc_id = d.doc_id and dp.role = 'Prepare' left join document_user_role dr on dr.doc_id = d.doc_id and dr.role = 'Review' where (d.status = 4) or (da.userid = '') or (dp.userid = '') or (dr.userid = '')*/

        db.query(
            // " select d.doc_id, d.document_number as document_id, d.document_category, d.document_type, d.document_name, 
            // d.version, d.release_date, d.version_changes, d.status, d.created_at, d.updated_at, da.userid as approver, 
            // dr.userid as reviewer, dp.userid as writer from documents d left join document_user_role da on 
            // da.doc_id = d.doc_id and da.role = 'Approve' left join document_user_role dp on dp.doc_id = d.doc_id and
            //  dp.role = 'Prepare' left join document_user_role dr on dr.doc_id = d.doc_id and dr.role = 'Review' where
            //   d.doc_id = '" + doc_id + "' and ((d.status = 4) or (da.userid = '" + userid + "') or 
            //   (dp.userid = '" + userid + "') or (dr.userid = '" + userid + "')) ", 

            userquery.commonjoinwithwherealias(tablemap, columnlist, joinrelationtable, conditionkey, conditionvalue, alias).then((e1, r1) => {
                if (e1) {
                    return reply({
                        statusCode: 200,
                        error: true,
                        message: e1.sqlMessage,
                        data: null
                    });
                } else {
                    return reply({
                        statusCode: 200,
                        error: false,
                        message: "Document Details",
                        data: r1[0]
                    });
                }
            })
            //     function (e1, r1) {
            //         if (e1) {
            //             return reply({
            //                 statusCode: 200,
            //                 error: true,
            //                 message: e1.sqlMessage,
            //                 data: null
            //             });
            //         } else {
            //             return reply({
            //                 statusCode: 200,
            //                 error: false,
            //                 message: "Document Details",
            //                 data: r1[0]
            //             });
            //         }
            //   //  }
        )
    },
    auth: {
        strategy: 'token'
    }
}




// list document users by roles 
exports.suggestionsByDoc = {
    validate: {
        payload: {
            doc_id: Joi.string().required(),
            role: Joi.string().required(),
            userid: Joi.string().required()
        }
    },
    handler: function (request, reply) {
        var doc_id = request.payload.doc_id
        var role = request.payload.role
        const tablemap = suggestions;
        const colummap = ['sid', 'link_id', 'suggestion', 'created_at', 'updated_at', raw(`(select link_id from document_user_role where role = '" + role + "' and doc_id = '" + doc_id + "')`)];
        const condition =
            // var userid = request.payload.userid

            db.query(
                // " select * from suggestions where link_id = (select link_id from document_user_role where role = '" + role + "' and doc_id = '" + doc_id + "') ",
                userquery.selectwithcond(tablemap, colummap, condition).then((error, result) => {
                    if (error) {
                        return reply({
                            statusCode: 200,
                            error: true,
                            message: error.sqlMessage,
                            data: null
                        });
                    } else {

                        return reply({
                            statusCode: 200,
                            error: false,
                            message: "list of document " + role + " suggestion",
                            data: result,
                        });
                    }
                })
                // function (error, result) {
                //         if (error) {
                //             return reply({
                //                 statusCode: 200,
                //                 error: true,
                //                 message: error.sqlMessage,
                //                 data: null
                //             });
                //         } else {

                //             return reply({
                //                 statusCode: 200,
                //                 error: false,
                //                 message: "list of document " + role + " suggestion",
                //                 data: result,
                //             });
                //         }
                //     }
            )
    },
    auth: {
        strategy: 'token'
    }
};

// function addWaterMark(doc) {
//     var totalPages = doc.internal.getNumberOfPages();

//     for (i = 1; i <= totalPages; i++) {
//         doc.setPage(i);
//         //doc.addImage(imgData, 'PNG', 40, 40, 75, 75);
//         doc.setTextColor(150);
//         doc.text(50, doc.internal.pageSize.height - 30, 'Watermark');
//     }

//     return doc;
// }
