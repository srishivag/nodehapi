const config = require('./config')

module.exports =  require('knex')({
  client: 'mysql',
  connection: {
    host: config.database.host,
    user: config.database.username,
    password: config.database.password,
    database: config.database.db,
    charset: 'utf8'
  }
}) 