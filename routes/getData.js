/**
 * New node file
 */


module.exports = {

	    '/': function(req, res){
	    	console.log('info',"welcome page called");
	    	res.send("Welcome DigiVore");
	    },
		'/getFertilizer':function(req,res){
			console.log('info',"gettting fertilizer1");
			var ferti=["Pottasium Sulphate","Organic Fertilizers","Humic Acid","Mono Potassium Phosphor","Ammonium Sulphate","Bentonite Granules"];
			var ferti1={};
			ferti1.data=ferti;
			res.send(ferti1);
		},
		'/getSeason':function(req,res){
			console.log('info',"getting seasons");
			var seasons=["Summer","Autumn","Winter"];
			res.send(seasons);
		},
		'/getCrop':function(req,res){
			console.log('info',"getting seasons");
			var crops=["Sugarcane","Wheat","Rice","Cotton","Corn","Groundnut","Mangoes"];
			res.send(crops);
		},
		'/getSoilType':function(req,res){
			console.log('info',"getting seasons");
			var seasons=["Red Soil","Black Soil","Black Aluvilial Soil"];
			res.send(seasons);
		},
		'/getLandSize':function(req,res){
			console.log('info',"getting seasons");
			var seasons=["0-5 Acres","6-10 Acres","11-15 Acres","16-20 Acres"];
			res.send(seasons);
		}
	};
