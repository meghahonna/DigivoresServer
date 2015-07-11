var mongo = require('mongoskin');
var bodyParser = require('body-parser');
var rest = require('restler');
var http = require("http");
//var dbUrl=require('constants/Urlconstants.js');
var client = require('../lib')('AC469270d26d697c5faeac37fb433273ac', 'dda4bc2b69c98e7bb12a5538721b7234');

var dbUrl="mongodb://localhost:27017/digiVores";
//var DbUrl="mongodb://localhost:27017/garbageCollector";
var db = mongo.db(dbUrl, {
	native_parser : true
});

module.exports = {

	    '/sendsms': {

	    	methods: ['post'],
	    	fn: function(req, res){
	    		try {

	    			var smsData = req.body;

	    			console.log('\n Inside main Method');
	    			console.log(smsData);
					res.setHeader("Access-Control-Allow-Origin", "*");
					res.setHeader('Access-Control-Allow-Headers', 'Content-Type,x-requested-with,Authorization');
					res.setHeader('Access-Control-Allow-Methods', 'GET,POST,DELETE,PUT,OPTIONS');
					res.setHeader('Access-Control-Max-Age', '10');
					res.setHeader('Allow', 'GET, HEAD, POST, PUT, DELETE, TRACE, OPTIONS, PATCH');
	    			res.send();

					sendsms(smsData);

	    			console.log('\n Returning from the Method ');

	    		} catch (err) {
	    			console.log('\n Exception in Publish Service');
	    			console.log(err);
	    		}
	    	}
	    }
	    }

function sendsms(smsData) {

	
	console.log("sending sms");
	
	//Send an text message
client.sendMessage({

    to: '+919900693567', // Any number Twilio can deliver to
    from: '+12097574996', // A number you bought from Twilio and can use for outbound communication
    body: 'Crop Data' // body of the SMS message

}, function(err, responseData) { //this function is executed when a response is received from Twilio

    if (!err) { // "err" is an error received during the request, if any

        // "responseData" is a JavaScript object containing data received from Twilio.
        // A sample response from sending an SMS message is here (click "JSON" to see how the data appears in JavaScript):
        // http://www.twilio.com/docs/api/rest/sending-sms#example-1

        console.log(responseData.from); // outputs "+14506667788"
        console.log(responseData.body); // outputs "word to your mother."

    }

});

			return;
}

