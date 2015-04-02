var fs = require('fs');
function myfunction(dirname, filtername, callback) {
		var returnArray = [];
		fs.readdir(dirname, function(err, data) {

			return callback(err);
			var i = 0;
			var ret = 0;
			for(; i<data.length;) {
				if (data[i].indexOf("." + filtername) > 0 ) {
					returnArray[ret] = data[i];
					ret++;
					console.log(data[i]);
					console.log("length " + returnArray.length);
					//console.log(filtername);
				}
				i++;
			
			}
//			console.log("returning " + returnArray.length);
//			return returnArray;	
		});
		//if (err) throw err;
		//console.log("returning " + returnArray.length);
		callback(null, returnArray);
}		
function myfunction_1(returnArray) {
	returnArray[0] = "mahesh";
	returnArray[1] = "paul";
	return returnArray;
}
module.exports = {
  sayHelloInEnglish: function() {
    return "HELLO";
  },
        
  sayHelloInSpanish: function() {
    return "Hola";
  },


	myfunction: myfunction,
	myfunction_1: myfunction_1
};
