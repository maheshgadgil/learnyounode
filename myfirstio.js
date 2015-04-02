var fs = require('fs');
//var str = fs.readFileSync("C:/Users/I828591/Documents/nodejs_programs/testfile.txt").toString();
//console.log(process.argv[2]);
var str = fs.readFileSync(process.argv[2]).toString();
var arr = str.split('\n');
var i = 0;
for (; i<arr.length;) {
//	console.log("val of i " + i);
//	console.log(arr[i]);
	i++;
}

console.log(arr.length-1);