var mongo = require('mongoskin');
var bodyParser = require('body-parser');
var rest = require('restler');
var http = require("http");
//var dbUrl=require('constants/Urlconstants.js');

var dbUrl="mongodb://localhost:27017/digiVores";

var db = mongo.db(dbUrl, {
	native_parser : true
});

module.exports = {

	    '/addCropData': {

	    	methods: ['post'],
	    	fn: function(req, res){
	    		try {

	    			var cropData = req.body;

	    			console.log('\n Inside main Method');
	    			console.log(cropData);
					res.setHeader("Access-Control-Allow-Origin", "*");
					res.setHeader('Access-Control-Allow-Headers', 'Content-Type,x-requested-with,Authorization');
					res.setHeader('Access-Control-Allow-Methods', 'GET,POST,DELETE,PUT,OPTIONS');
					res.setHeader('Access-Control-Max-Age', '10');
					res.setHeader('Allow', 'GET, HEAD, POST, PUT, DELETE, TRACE, OPTIONS, PATCH');
	    			res.send("Added Data");

	    			pushCropData(cropData);

	    			console.log('\n Returning from the Method ');

	    		} catch (err) {
	    			console.log('\n Exception in cropData Service');
	    			console.log(err);
	    		}
	    	}
	    },
	    '/getCropData': {

	    	methods: ['post'],
	    	fn: function(req, res){
	    		try {

	    			var cropData = req.body;

	    			console.log('\n Inside main Method');
	    			console.log(cropData);
					res.setHeader("Access-Control-Allow-Origin", "*");
					res.setHeader('Access-Control-Allow-Headers', 'Content-Type,x-requested-with,Authorization');
					res.setHeader('Access-Control-Allow-Methods', 'GET,POST,DELETE,PUT,OPTIONS');
					res.setHeader('Access-Control-Max-Age', '10');
					res.setHeader('Allow', 'GET, HEAD, POST, PUT, DELETE, TRACE, OPTIONS, PATCH');
	    			res.send(getCropData(cropData));
	    			console.log('\n Returning from the Method ');

	    		} catch (err) {
	    			console.log('\n Exception in get cropData Service');
	    			console.log(err);
	    		}
	    	}
	    }
	    }

function pushCropData(cropData) {

	
	db.collection("cropCollector").insert(cropData, function(err, result) {

				if (err === null) {
					console.log('\n cropData Inserted');
					// Insert the part where the GCM notifications are sent
					
				} else {
					console.log("\nAn error occurred while inserting row in mongo DB: ", err);
				}
db.close();
			});
	
			return;
}

function getCropData(cropData) {

	
	var cursor =db.collection('cropCollector').find( { "locality": "Bangalore East" } );
	   cursor.each(function(err, doc) {
	      //assert.equal(err, null);
	      if(err != null){
	    	  console.log("error"+err);
	    	  db.close();
	    	  return "error";
	      }
	      else{
	    	  console.log("else part"+doc);
	    	  
	    	  if (doc != null) {
	 	         console.log(doc);
	 	         db.close();
	 	         return doc;
	 	      } else {
	 	    	  db.close();
	 	    	  return "not found";
	 	      }  
	      }
	      
	   });
}
	
	
	