var fs = require('fs');
//var str = fs.readFileSync("C:/xxx.txt").toString();
//console.log(process.argv[2]);
fs.readFile(process.argv[2], 'utf8', function(err, data) {
	if (err) throw err;
	var arr = data.toString().split('\n');
	console.log(arr.length-1);
});
