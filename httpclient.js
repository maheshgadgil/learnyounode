var http = require('http');
var server = http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(1337, '127.0.0.1');
//console.log('Server running at http://127.0.0.1:1337/');
//console.log("2: " + process.argv[2]);
//console.log("3: " + process.argv[3]);
/*
var options = {
  hostname: process.argv[2],
  port: process.argv[1],
  path: '/',
  method: 'GET'
};
var req = http.request(options, function(res) {
	res.setEncoding('utf8');
	res.on('data', function(chunk) {
		console.log('BODY' + chunk);
	});
});

req.on('error', function(e) {
	console.log('problem with request: ' + e.message);
} );

// write data to request body
req.write('data\n');
req.write('data\n');
req.end();
*/
//var url = "http://" + process.argv[3] + ":" + process.argv[2];
//console.log(url);
http.get(process.argv[2], function(res) {
  //console.log("Got response: " + res.statusCode);
  res.setEncoding('utf8');
  res.on('data', function(chunk) {
  console.log(chunk);
  });
  res.on('end', function(end) {
  //console.log("response ended");
	});
}).on('error', function(e) {
  console.log("Got error: " + e.message);
});
/*
server.listen(1337, '127.0.0.1', function () {
 server.close(); 
 });

*/
