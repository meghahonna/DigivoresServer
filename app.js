/**
 * New node file
 */
var express = require('express');
var logger=require('./Utils/logger.js');
var routescan = require('express-routescan');
var bodyParser = require('body-parser')

// …

var app = express();

// app configuration
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));
// start express-routescan.
routescan(app);

app.listen(4040); //the port you want to use
console.log("Express server running at => http://localhost:" + "4040" + "/\nCTRL + C to shutdown");