var mymodule = require('C:/Users/I828591/Documents/nodejs_programs/mymodule.js');
//console.log (process.argv[2]);
//console.log (process.argv[3]);
/*
var returnArray = [];
returnArray = mymodule.myfunction_1(returnArray);
	var i = 0;

	for (; i<returnArray.length;) {
		console.log(returnArray[i]);
		i++;
	}
*/

mymodule.myfunction(process.argv[2], process.argv[3], function(err, list) {
	if (err) console.error("error");
		//console.log("returned following_2");
	list.forEach(function(file) {
		console.log(file);
	});
}
);

//console.log(mymodule.sayHelloInEnglish());
//mymodule.sayHelloInEnglish());