var http = require('http');
var https = require('https');
var fs = require('fs');
var bl = require('bl');
//var buflist = new bl.BufferList();
var urls = [];
urls[0] = process.argv[2];
urls[1] = process.argv[3];
urls[2] = process.argv[4];
var data = [];
var results = [];

// initialise results array
for (i = 0; i < urls.length; i++) {
  results[i] = null;
}
/*
function getData(data) {
for (i=0; i<urls.length; i++;) {
	http.get(urls[i], function(res){	
		res.setEncoding('utf8');
		var bulk = ""; 
		res.on('data', function(chunk) {
		//console.log("bulk " + bulk);
			bulk += chunk.toString();
		});
		res.on('end', function(end) {
		//console.log(bulk);
		data[i] = bulk;
		console.log(" in end value of i " + i + " " + data[i]);
		//console.log(data[i].toString());
		});
	}).on('error', function(e) {
		console.log("Got error: " + e.message);
	});
	//;
	
}
return data;
}
function main(param1, callback) {
	console.log(param1.toString());
	callback(param1);
}
//data = getData();
var print = function print() {
		console.log(" in print ");
		for (i=0; i<data.length; i++){

		console.log(i + " : " + data[i].toString() + "\n");
	}
}

main(getData(data), print);
*/
for (i = 0; i < urls.length; i++) {
  (function(i) {
    http.get(urls[i], function(request) {
      var result = "";
      request.setEncoding("utf8");
      request.on("data", function(data) {
        result += data;
      });
      request.on("end", function() {
        results[i] = result;
        var resultCount = 0;
        for (j = 0; j < results.length; j++) {
          if (results[j] != null) resultCount++;
        }
        if (resultCount == results.length) {
          for (j = 0; j < results.length; j++) {
            console.log(results[j]);
          }
        }
      });
    });
  })(i);
}