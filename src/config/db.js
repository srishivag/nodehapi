// const config = require('./config')
const config = require('./config')
var mysql = require('mysql');

var connection = mysql.createPool({
    host: config.database.host,
    user: config.database.username,
    password: config.database.password,
    database: config.database.db
});
module.exports = connection; 