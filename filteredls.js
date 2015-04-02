var fs = require('fs');
fs.readdir(process.argv[2], function(err, data) {
	if (err) throw err;
	var i = 0;
	for(; i<data.length;) {
		if (data[i].indexOf("." + process.argv[3]) > 0 ) console.log(data[i]);
		i++
	}
});
