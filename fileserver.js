var http = require('http');
var fs = require('fs');
var server = http.createServer(function(request, response){
response.writeHead(200, {'Content-Type': 'text/plain'});
	var rstream = fs.createReadStream(process.argv[3]);
	//var data;
	rstream.on('data', function(chunk) {
		response.write(chunk);
	});
	rstream.on('end', function() {		
		response.end();
	});
	
	
});
server.listen(process.argv[2], '127.0.0.1');

