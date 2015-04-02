var http = require('http');
//var map = require(through2-map);
var querystring = require('querystring');
var https = require('https');
var fs = require('fs');
const bl = require('bl');
//var bl = new BufferList();
var server = http.createServer(function (req, res) {
	if (req.method == "GET") console.log("GET");
	if (req.method == "POST") 
	{
		console.log("POST");
		console.log("POSTED"); 
  }
});
server.listen(process.argv[2], '127.0.0.1');

server.on('request', function(req, res) {
	if (req.method == "POST") 
	{
		var body = '';
        req.on('data', function (data) {
		//console.log("adding data");
            body += data;
			});
          req.on('end', function () {
            //var post = querystring.parse(body);
			//console.log("on request end");
			//console.log("body :" + body);
			//var data = JSON.parse(body);
			//var datastr = JSON.parse(data);
            //console.log("output_format:" + post.output_format);
			res.write(body.toString().toUpperCase());
			res.end();
        });
	//res.setEncoding('utf8');

	}	
});



  // Build the post string from an object
  var post_data = querystring.stringify({
      'compilation_level' : 'ADVANCED_OPTIMIZATIONS',
      'output_format': 'json',
      'output_info': 'compiled_code',
        'warning_level' : 'QUIET',
        'js_code' : 'sourcecode'
  });
  
	  // make a request
  var options = {
    port: process.argv[2],
    hostname: '127.0.0.1',
	path: '/',
	method: 'POST'
  };
  
    // Set up the request
  var post_req = http.request(options, function(res) {
      res.setEncoding('utf8');
      res.on('data', function (chunk) {
          console.log('Response: ' + chunk);
      });
  });
  post_req.write(post_data);

  post_req.on('error', function(e) {
  console.log('problem with request: ' + e.message);
});

    post_req.end();
  