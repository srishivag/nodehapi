var Hapi = require('hapi');
var Routes = require('./routes');
// var Db = require('./src/config/db');
var Config = require('./config/config');
var corsHeaders = require('hapi-cors-headers');
const inert = require('inert');
const  multipart  =  require('connect-multiparty');
const  multipartMiddleware  =  multipart({ uploadDir:  './uploads' });
var app = {};
app.config = Config;
global.PREFIX = ''
const bodyParser = require("body-parser");
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({
//     extended: true
// }));
//  now model is required
import { Model } from 'objection';
import Knexx from '../src/config/Knex';
//  now map both.
Model.knex(Knexx);
var server = new Hapi.Server();
// global.PREFIX = '';
global.PREFIX='';
server.connection({
  port: app.config.server.port
 
});

server.ext('onPreResponse', corsHeaders);
server.register([inert, require('hapi-auth-jwt')], err => {
  if (!err) {
    console.log('jwt registered');
  }

  server.auth.strategy('token', 'jwt', {
    key: 'AkRiViA-OhS-Ms-AudiT@$W#JnoH@$RPOIDW*65g14dg5@$5#$5%key*&^78t6bGTTY7868T^%(*k',

    verifyOptions: {
      algorithms: ['HS256']
    }
  });

  server.route(Routes.endpoints);
});
//check this function
server.ext('onPreResponse', function (request, h) {
  var response = request.response;
  // isServer indicates status code >= 500
  //  if error, pass it through server.log
  if (response && response.isBoom && response.isServer) {
    const error = response.error || response.message;
    // server.log(["error"], error);
    console.log(error);
  }
  return h.continue();
});

server.start(function () {
  console.log('Server started ', server.info.uri);
});