'use strict';

var jwt = require('jsonwebtoken');
var Joi = require('joi');
//var Boom = require('boom');
// var bcrypt = require('bcrypt');
// const saltRounds = 10;
// var trycatch = require('trycatch');
var md5 = require('md5');
// var generator = require('generate-password');
var db = require('../config/db');
// var dateFormat = require('dateformat');
// var now = new Date();
// var _ = require('underscore');

// user / supplier authentication
exports.auth = {
  validate: {
    payload: {
      username: Joi.string().required(),
      password: Joi.string().required()
    }
  },
  handler: function (request, reply) {
    var username = request.payload.username;
    var password = request.payload.password;
    console.log(request.payload.username);
    console.log(request.payload.password);
    db.query(
      " select e.emp_id as userid ,e.emp_id, e.emp_name as name, e.gender ,e.email,e.date_of_birth, e.contact1, e.emp_type, ( SELECT d.designation from designations d INNER JOIN employee_structure es ON es.designation = d.short_name WHERE es.emp_id = '" +
      username +
      "' AND CURDATE() >= date(es.change_date) ORDER BY es.es_id DESC LIMIT 1 ) as designation,( SELECT d.fullname from departments d INNER JOIN employee_structure es ON es.department = d.short_name WHERE es.emp_id = '" +
      username +
      "' AND CURDATE() >= es.change_date ORDER BY es.es_id DESC LIMIT 1 ) as department,( SELECT d.id from departments d INNER JOIN employee_structure es ON es.department = d.short_name WHERE es.emp_id = '" +
      username +
      "' AND CURDATE() >= es.change_date ORDER BY es.es_id DESC LIMIT 1 ) as department_id from employees e where e.emp_id='" +
      username +
      "' and e.password='" +
      md5(password) +
      "' and e.status=1",
        // "select emp_id from employees",
      function (error, result, /*fields*/) {
        console.log(result);
        console.log('RESULT');
        console.log(error);
        // return reply({
        //   statusCode: 200,
        //   error: true,
        //   message: error.sqlMessage,
        //   data: null
        // });
        //db.query("select u.uid,userid,name,email,mobile,department,designation from users u INNER JOIN employees e ON e.emp_id = u.userid where u.userid='" + username + "' and u.password='" + md5(password) + "' and u.status=1 ", function (error, result, fields) {
        if (error) {
          console.log(error)
          return reply({
            statusCode: 200,
            error: true,
            message: error.sqlMessage,
            data: null
          });
        }
        if (result.length > 0) {
          const token = jwt.sign({
            username: username
          },
            'AkRiViA-OhS-Ms-AudiT@$W#JnoH@$RPOIDW*65g14dg5@$5#$5%key*&^78t6bGTTY7868T^%(*k', {
              algorithm: 'HS256',
              expiresIn: '24h'
            }
          );
          db.query("select role from all_user_roles join config_roles on role=rol_id where emp_id = '" + username + "' ", function (
            err,
            res,
            //fld
          ) {
            console.log("err",res);
            console.log("err",err);
            if (err) {
              console.log(err)
              return reply({
                statusCode: 200,
                error: true,
                message: err.sqlMessage,
                data: null
              });
            }
            var rol = [];
            res.forEach(row => {
              rol.push(row.role);
            });
            console.log("logged in success")
            return reply({
              statusCode: 200,
              error: false,
              message: 'Success...',
              token: token,
              data: result[0],
              roles: rol
            });
          });
        } else {
          console.log("invalid credentials========");
          return reply({
            statusCode: 200,
            error: true,
            message: 'Invalid Credentials...',
            data: null
          });
        }
      }
    );
  }
  // auth: { strategy: 'token' }
};
