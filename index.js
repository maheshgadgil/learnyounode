var url = require('url');


var jdbc = new ( require('jdbc') );

var config = {
  libpath: 'c:/tmp/jconn4.jar',
  drivername: 'com.sybase.jdbc4.jdbc.SybDriver',
  url: 'jdbc:sybase:Tds:localhost:1600/dbname?user=username&password=password'
};

jdbc.initialize(config, function(err, res) {
  if (err) {
    console.log(err);
  }
});


var http = require('http');
http.createServer(function (req, res) {
var url_parts = url.parse(req.url, 'query=string', true);
var query = url_parts.query;
  res.writeHead(200, {'Content-Type': 'text/plain'});
  console.log(query["name"]);
  console.log("after")
  res.end('Hello World\n');
  console.log(query);
  
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');

var fs = require('fs');
fs.exists('c:/tmp/asecarina.zip', function(answer){
	if (answer)
		console.log("exists");
		else
		console.log("does not exist");
});

var genericQueryHandler = function(err, results) {
  if (err) {
    console.log(err);
  } else if (results) {
    console.log(results);
	
  }
};

http.get("http://www.google.com/index.html", function(res) {
  console.log("Got response: " + res.statusCode);
}).on('error', function(e) {
  console.log("Got error: " + e.message);
});

jdbc.open(function(err, conn) {
  if (conn) {
    // SELECT statements are called with executeQuery
    jdbc.executeQuery("SELECT * FROM testCR767230", genericQueryHandler);

    // Table modifying statements (UPDATE/INSERT/DELETE/etc) are called with executeUpdate
    jdbc.executeUpdate("UPDATE testCR767230 SET id = 20", genericQueryHandler);

    // Use non-generic callbacks to handle queries individually and/or to nest queries
    jdbc.executeUpdate("INSERT INTO table VALUES (15,'2014-09-10')", function(err, results) {

      if(results > 0) {
        jdbc.executeQuery("SELECT * FROM table where id > 0", genericQueryHandler);
      }

    });
  }
});


jdbc.close(function(err) {
  if(err) {
    console.log(err);
  } else {
    console.log("Connection closed successfully!");
  }
});