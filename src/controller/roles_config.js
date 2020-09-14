'use strict';

// var jwt = require('jsonwebtoken');
var Joi = require('joi');
// var Boom = require('boom');
// var bcrypt = require('bcrypt');
// const saltRounds = 10;
// var trycatch = require('trycatch')
// var md5 = require('md5');
// var generator = require('generate-password')
var db = require('../config/db')
// var dateFormat = require('dateformat');
// var now = new Date();
// var base64 = require('file-base64')
// var fs = require('fs');
// var async = require("async");


// var moment = require('moment');
import * as _ from 'underscore';
const userquery = require('../libraries/userquery');
const all_roles = require('../models/All_roles');
// const all_user_roles = require('../models/All_user_roles');
const audit = require('../models/Audits');
const config_modules = require('../models/Config_modules');
const config_roles = require('../models/Config_roles');



// var secret = 'AkRiViA-OhS-Ms-AudiT@$W#JnoH@$RPOIDW*65g14dg5@$5#$5%key*&^78t6bGTTY7868T^%(*k';


// get all modules list
exports.getAllModuleList = {

    handler: function (request, reply) {
        const tablemap = config_modules;
        const columnlist = ['md_id', 'short_code', 'module_name', 'status', 'created_on', 'modified_on'];

        db.query(" SELECT * FROM config_modules ", function (error, result, /*fields*/) {
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
                    message: "All Modules List",
                    data: result,
                });
            }
        })


        // db.query(" SELECT * FROM config_modules ", function (error, result
        //     //  fields
        //     ) {
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
        //             message: "All Modules List",
        //             data: result,
        //         });
        //     }
        // })
    },
    auth: {
        strategy: 'token'
    }
};

// get all modules list with status 1
exports.getAllModuleListWithStatus = {

    handler: function (request, reply) {

        db.query(" SELECT * FROM config_modules WHERE status =1 ", function (error, result, /*fields*/) {
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
                    message: "All Modules List with status 1",
                    data: result,
                });
            }
        })

        // db.query(" SELECT * FROM config_modules WHERE status =1 ", function (error, result
        //     //  fields
        //     ) {
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
        //             message: "All Modules List with status 1",
        //             data: result,
        //         });
        //     }
        // })
    },
    auth: {
        strategy: 'token'
    }
};



// get all roles list
exports.getAllRoleList = {

    handler: function (request, reply) {

        // var emp_id = request.auth.credentials.username;

        db.query(" SELECT * FROM config_roles ", function (error, result, /*fields*/) {
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
                    message: "All Roles List",
                    data: result,
                });
            }
        })

        // db.query(" SELECT * FROM config_roles ", function (error, result
        //     //  fields
        //     ) {
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
        //             message: "All Roles List",
        //             data: result,
        //         });
        //     }
        // })
    },
    auth: {
        strategy: 'token'
    }
};


// get all roles list with status 1
exports.getAllRoleListWithStatus = {

    handler: function (request, reply) {

        db.query(" SELECT * FROM config_roles WHERE status = 1 ", function (error, result, /*fields*/) {
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
                    message: "All Roles List with status 1",
                    data: result,
                });
            }
        })

        // db.query(" SELECT * FROM config_roles WHERE status = 1 ", function (error, result
        //     //  fields
        //     ) {
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
        //             message: "All Roles List with status 1",
        //             data: result,
        //         });
        //     }
        // })
    },
    auth: {
        strategy: 'token'
    }
};



// add update modules
exports.addUpdModule = {
    validate: {
        payload: {
            short_code: Joi.string().required(),
            module_name: Joi.string().required(),
            status: Joi.number().required(),
            md_id: Joi,
        }
    },
    handler: function (request, reply) {

        // var userid = request.auth.credentials.username;
        var md_id = request.payload.md_id;
        var short_code = request.payload.short_code;
        var module_name = request.payload.module_name;
        var status = request.payload.status;

        db.query(" INSERT INTO config_modules ( md_id, short_code, module_name, status ) VALUES( " + md_id + " , '" + short_code + "', '" + module_name + "', " + status + " ) ON DUPLICATE KEY UPDATE short_code = '" + short_code + "', module_name = '" + module_name + "', status = '" + status + "' ", function (error, result, /*fields*/) {
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
                    message: "Your request was successful",
                    data: result,
                });
            }


        })
    },
    auth: {
        strategy: 'token'
    }
};


// add update roles
exports.addUpdRole = {
    validate: {
        payload: {
            role_name: Joi.string().required(),
            status: Joi.number().required(),
            rol_id: Joi,
        }
    },
    handler: function (request, reply) {

        //var userid = request.auth.credentials.username;
        var rol_id = request.payload.rol_id;
        var role_name = request.payload.role_name;
        var status = request.payload.status;

        db.query(" INSERT INTO config_roles ( rol_id, role_name, status ) VALUES( " + rol_id + " , '" + role_name + "', " + status + " ) ON DUPLICATE KEY UPDATE role_name = '" + role_name + "', status = '" + status + "' ", function (error, result, /*fields*/) {
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
                    message: "Your request was successful",
                    data: result,
                });
            }


        })
    },
    auth: {
        strategy: 'token'
    }
};



// get all roles modules list
exports.getAllRoleModuleList = {

    handler: function (request, reply) {

        db.query(" SELECT ar.rid, ar.status, ar.module, ar.roleid, cm.short_code, cm.module_name, cr.role_name FROM all_roles ar INNER JOIN config_modules cm ON cm.md_id = ar.module INNER JOIN config_roles cr ON cr.rol_id = ar.roleid ", function (error, result, /*fields*/) {
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
                    message: "All Roles Modules List",
                    data: result,
                });
            }
        })


        // db.query(" SELECT ar.rid, ar.status, ar.module, ar.roleid, cm.short_code, cm.module_name, cr.role_name 
        // FROM all_roles ar INNER JOIN config_modules cm ON cm.md_id = ar.module
        // INNER JOIN config_roles cr ON cr.rol_id = ar.roleid ", 
        // // function (error, result
        //     //  fields
        //     ) {
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
        //             message: "All Roles Modules List",
        //             data: result,
        //         });
        //     }
        // })
    },
    auth: {
        strategy: 'token'
    }
};


// get all roles modules list with status 1
exports.getAllRoleModulesListWithStatus = {

    handler: function (request, reply) {

        db.query(" SELECT ar.rid, ar.status, ar.module, ar.roleid, cm.short_code, cm.module_name, cr.role_name FROM all_roles ar INNER JOIN config_modules cm ON cm.md_id = ar.module INNER JOIN config_roles cr ON cr.rol_id = ar.roleid WHERE ar.status = 1 AND cm.status = 1 AND cr.status = 1 ", function (error, result, /*fields*/) {
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
                    message: "All Roles Modules List",
                    data: result,
                });
            }
        })

        // db.query(" SELECT ar.rid, ar.status, ar.module, ar.roleid, cm.short_code, cm.module_name, cr.role_name
        //  FROM all_roles ar INNER JOIN config_modules cm ON cm.md_id = ar.module INNER JOIN config_roles cr 
        //  ON cr.rol_id = ar.roleid WHERE ar.status = 1 AND cm.status = 1 AND cr.status = 1 ", 
        // function (error, result
        //     //  fields
        //     ) {
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
        //             message: "All Roles Modules List with status 1",
        //             data: result,
        //         });
        //     }
        // })
    },
    auth: {
        strategy: 'token'
    }
};

// add update roles modules
exports.addUpdRoleModule = {
    validate: {
        payload: {
            module: Joi.string().required(),
            roleid: Joi.string().required(),
            status: Joi.number().required(),
            rid: Joi,
        }
    },
    handler: function (request, reply) {

        // var userid = request.auth.credentials.username;
        var roleid = request.payload.roleid;
        var module = request.payload.module;
        var status = request.payload.status;
        var rid = request.payload.rid;

        db.query(" INSERT INTO all_roles ( rid, module, roleid, status ) VALUES( " + rid + " , '" + module + "', '" + roleid + "',  " + status + " ) ON DUPLICATE KEY UPDATE module = '" + module + "', roleid = '" + roleid + "', status = '" + status + "' ", function (error, result, /*fields*/) {
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
                    message: "Your request was successful",
                    data: result,
                });
            }
        })
    },
    auth: {
        strategy: 'token'
    }
};

// get all roles by emp_id present
exports.getAllRolesByEmployeePresent = {
    validate: {
        payload: {
            emp_id: Joi.string().required(),
        }
    },
    handler: function (request, reply) {

        var emp_id = request.payload.emp_id;
        let result1 = [];
        db.query(" SELECT aur.urid, aur.emp_id, aur.role, aur.display_name, aur.change_date, aur.upto, cm.module_name, cm.short_code as module_code, cr.role_name FROM all_user_roles aur INNER JOIN all_roles ar ON ar.rid = aur.role INNER JOIN config_modules cm ON cm.md_id = ar.module INNER JOIN config_roles cr ON cr.rol_id = ar.roleid WHERE aur.emp_id = '" + emp_id + "' AND ar.status = 1 AND cm.status = 1 AND cr.status = 1 AND ( ( CURDATE() >= aur.change_date AND aur.upto is null ) OR ( CURDATE() >= aur.change_date AND aur.upto > CURDATE() ) ) GROUP BY aur.role ORDER BY aur.urid DESC ", async function (error, result, /*fields*/) {
            if (error) {
                return reply({
                    statusCode: 200,
                    error: true,
                    message: error.sqlMessage,
                    data: null
                });
            } else {
                result1 = [];
                result1 = result;
                let r;
                r = _.filter(result1, function (km) {
                    return km.module_name == 'Incidents'
                });
                if (r.length > 0) {
                    //
                } else {
                    result1.push({
                        urid: '0',
                        emp_id: emp_id,
                        role: '',
                        display_name: 'User',
                        change_date: '',
                        upto: '',
                        module_name: 'Incidents',
                        module_code: 'Incident',
                        role_name: 'User'

                    })
                }


                return reply({
                    statusCode: 200,
                    error: false,
                    message: emp_id + " Roles List ",
                    data: result1,
                });
            }


        })
    },
    // auth: { strategy: 'token' }
};

// get all roles by emp_id futher
exports.getAllRolesByEmployeeFuther = {
    validate: {
        payload: {
            emp_id: Joi.string().required(),
        }
    },
    handler: function (request, reply) {

        var emp_id = request.payload.emp_id;

        db.query(" SELECT aur.urid, aur.emp_id, aur.role, aur.display_name, aur.change_date, aur.upto, cm.module_name, cm.short_code as module_code, cr.role_name FROM all_user_roles aur INNER JOIN all_roles ar ON ar.rid = aur.role INNER JOIN config_modules cm ON cm.md_id = ar.module INNER JOIN config_roles cr ON cr.rol_id = ar.roleid WHERE aur.emp_id = '" + emp_id + "' AND ar.status = 1 AND cm.status = 1 AND cr.status = 1 AND ( ( CURDATE() < aur.change_date AND aur.upto is null ) OR ( CURDATE() < aur.change_date AND aur.upto > CURDATE() ) ) GROUP BY aur.role ORDER BY aur.urid DESC ", function (error, result, /*fields*/) {
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
                    message: emp_id + " Roles List ",
                    data: result,
                });
            }


        })
    },
    auth: {
        strategy: 'token'
    }
};

// assign all roles emp_ids
exports.AssignAllRolesEmployees = {
    validate: {
        payload: {
            // id: Joi.string().required(),        //  byrole -> rid , byemp -> emp_id
            // process_type: Joi.string().required(),  //  'byrole','byemp'
            // function_type: Joi.string().required(),  //  'add','update',
            dataArray: Joi.string().required() //   [{urid:null/2, emp_id:'',role:1,display_name:'',change_date:'',upto:null/''}]
        }
    },
    handler: function (request, reply) {

        // var function_type = request.payload.function_type;
        // var id = request.payload.id;
        // var process_type = request.payload.process_type;
        var data = JSON.parse(request.payload.dataArray);
        // console.log(data, 'add or update data');

        var query = "";
        var values = [];

        // if (function_type == 'add') {
        query = " INSERT INTO all_user_roles (urid, emp_id, role, display_name, change_date, upto ) VALUES ?ON DUPLICATE KEY UPDATE display_name=VALUES(display_name), change_date=VALUES(change_date), upto=VALUES(upto)  ";


        data.forEach((row) => {
            values.push([row.urid, row.emp_id, row.role, row.display_name, row.change_date, row.upto]);
        });
        // } else {
        // query = " INSERT INTO all_user_roles (urid, emp_id, role, display_name, change_date, upto ) VALUES ? ON DUPLICATE KEY UPDATE display_name=VALUES(display_name), change_date=VALUES(change_date), upto=VALUES(upto) ";


        // data.forEach((row) => {
        //     values.push([row.urid, row.emp_id, row.role, row.display_name, row.change_date, row.upto]);
        // });


        // remove this testing purpose
        // return reply({
        //     statusCode: 200,
        //     error: false,
        //     message: "Your request was successful",
        //     data: null,
        // });
        // }


        // await db.query(module_query, [values], async function (error2, result2, fields2) {



        db.query(query, [values], function (error,/* result*/ /*fields*/) {
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
                    message: "Your request was successful",
                    data: null,
                });
            }


        })
    },
    auth: {
        strategy: 'token'
    }
};

// get all roles emp_ids by process
exports.getAllRolesEmployeesDataByProcess = {
    validate: {
        payload: {
            id: Joi.string().required(), //  byrole -> rid , byemp -> emp_id
            process_type: Joi.string().required(), //  'byrole','byemp'
            function_type: Joi.string().required(), //  'add','update'
        }
    },
    handler: function (request, reply) {

        var function_type = request.payload.function_type;
        var id = request.payload.id;
        var process_type = request.payload.process_type;

        var query = "";

        if (process_type == 'byrole') { // byrole

            if (function_type == 'add') { //add byrole

                query = "SELECT e.*,(SELECT d.designation from designations d INNER JOIN employee_structure es ON es.designation = d.short_name WHERE e.emp_id = es.emp_id AND CURRENT_DATE() >=  date(es.change_date) ORDER BY es.es_id   DESC LIMIT 1 ) as desig, ( SELECT d.fullname from departments d INNER JOIN employee_structure es ON es.department = d.short_name WHERE e.emp_id = es.emp_id AND CURRENT_DATE() >=  date(es.change_date) ORDER BY es.es_id   DESC LIMIT 1 ) as department FROM employees e WHERE NOT FIND_IN_SET (  e. emp_id  , (SELECT IFNULL(GROUP_CONCAT(emp_id),'') FROM all_user_roles aur WHERE aur.role = '" + id + "' AND (  ( CURDATE() <= aur.change_date AND aur.upto is null ) OR ( CURDATE() <= aur.change_date AND aur.upto >= CURDATE() )  OR  ( CURDATE() >= aur.change_date AND aur.upto >= CURDATE() ) OR ( CURDATE() >= aur.change_date AND aur.upto is null )  ) ORDER BY aur.urid DESC ) )";
            } else { // update byrole

                query = "SELECT e.*,aur.urid, aur.emp_id, aur.role, aur.display_name, aur.change_date, aur.upto, cm.module_name, cm.short_code as module_code, cr.role_name,( SELECT d.designation from designations d INNER JOIN employee_structure es ON es.designation = d.short_name WHERE e.emp_id = es.emp_id AND CURRENT_DATE() >=  date(es.change_date) ORDER BY es.es_id   DESC LIMIT 1 ) as desig, (SELECT d.designation from designations d INNER JOIN employee_structure es ON es.designation = d.short_name WHERE e.emp_id = es.emp_id AND CURRENT_DATE() >=  date(es.change_date) ORDER BY es.es_id   DESC LIMIT 1 ) as desig, ( SELECT d.fullname from departments d INNER JOIN employee_structure es ON es.department = d.short_name WHERE e.emp_id = es.emp_id AND CURRENT_DATE() >=  date(es.change_date) ORDER BY es.es_id   DESC LIMIT 1 ) as department FROM employees e INNER JOIN all_user_roles aur ON aur.emp_id = e.emp_id INNER JOIN all_roles ar ON ar.rid = aur.role INNER JOIN config_modules cm ON cm.md_id = ar.module INNER JOIN config_roles cr ON cr.rol_id = ar.roleid WHERE aur.role = '" + id + "' AND (  ( CURDATE() <= aur.change_date AND aur.upto is null ) OR ( CURDATE() <= aur.change_date AND aur.upto >= CURDATE() )  OR  ( CURDATE() >= aur.change_date AND aur.upto >= CURDATE() ) OR ( CURDATE() >= aur.change_date AND aur.upto is null )  ) ORDER BY aur.urid DESC";
            }


        } else { // byemp
            if (function_type == 'add') { //add byemp

                query = "SELECT ar.rid, cm.module_name, cm.short_code as module_code, cr.role_name FROM all_roles ar INNER JOIN config_modules cm ON cm.md_id = ar.module INNER JOIN config_roles cr ON cr.rol_id = ar.roleid WHERE NOT FIND_IN_SET  ( ar.rid ,  ( SELECT IFNULL(GROUP_CONCAT(aur.role),'') FROM all_user_roles aur WHERE aur.emp_id = '" + id + "' AND  ( ( CURDATE() <= aur.change_date AND aur.upto is null ) OR ( CURDATE() <= aur.change_date AND aur.upto >= CURDATE() ) OR ( CURDATE() >= aur.change_date AND aur.upto >= CURDATE() ) OR ( CURDATE() >= aur.change_date AND aur.upto is null ) )  ) ) AND ar.status = 1 AND cm.status = 1 AND cr.status = 1";

            } else { // update byemp
                query = "SELECT aur.urid, aur.emp_id, aur.role, aur.display_name, aur.change_date, aur.upto, cm.module_name, cm.short_code as module_code, cr.role_name FROM all_user_roles aur INNER JOIN all_roles ar ON ar.rid = aur.role INNER JOIN config_modules cm ON cm.md_id = ar.module INNER JOIN config_roles cr ON cr.rol_id = ar.roleid  WHERE aur.emp_id = '" + id + "' AND ( ( CURDATE() <= aur.change_date AND aur.upto is null ) OR ( CURDATE() <= aur.change_date AND aur.upto >= CURDATE() ) OR ( CURDATE() >= aur.change_date AND aur.upto >= CURDATE() ) OR ( CURDATE() >= aur.change_date AND aur.upto is null ) ) AND ar.status = 1 AND cm.status = 1 AND cr.status = 1";
            }

        }

        db.query(query, function (error, result, /*fields*/) {
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
                    message: " List ",
                    data: result,
                });
            }


        })
    },
    auth: {
        strategy: 'token'
    }
};

exports.get_for_designationwise = {

    handler: function (request, reply) {

        db.query("select es.emp_id as id,e.emp_name as itemName,d.designation from employee_structure es inner join employees e on e.emp_id = es.emp_id inner join designations d on es.designation = d.short_name where es.designation = '" + request.payload.type + "'  AND date_format(es.change_date,'%Y-%m-%d') <= CURDATE() GROUP BY es.emp_id ", function (err, res, /*fields*/) {
            if (err) {
                return reply({
                    statusCode: 200,
                    err1: false,
                    message: err.sqlMessage,
                    data: null
                });
            } else {
                return reply({
                    statusCode: 200,
                    error: true,
                    message: "List for designation wise",
                    data: res,
                });
            }

        })

    },
    auth: {
        strategy: 'token'
    }
};
exports.assignRoles = {

    handler: function (request, reply) {

        // var emp_id = request.auth.credentials.username;

        db.query("SELECT a.*,ar.rid,cm.module_name,cr.role_name,cr.rol_id,cm.md_id FROM all_user_roles a inner join all_roles ar on ar.rid = a.role inner join config_roles cr on cr.rol_id = ar.roleid inner join config_modules cm on cm.md_id = ar.module where ar.status=1", function (error, result, /*fields*/) {
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
                    message: "All Roles List",
                    data: result,
                });
            }
        })

        // db.query("SELECT a.*,ar.rid,cm.module_name,cr.role_name,cr.rol_id,cm.md_id 
        // FROM all_user_roles a inner join all_roles ar on ar.rid = a.role inner join config_roles cr 
        // on cr.rol_id = ar.roleid inner join config_modules cm on cm.md_id = ar.module 
        // where ar.status=1", 
        // function (error, result
        //     //  fields
        //     ) {
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
        //             message: "All Roles List",
        //             data: result,
        //         });
        //     }
        // })
    },
    auth: {
        strategy: 'token'
    }
};