var http = require('http');
var url = require('url');
var querystring = require('querystring');
var server = http.createServer(function(req, res){
	var pathname = url.parse(req.url, true).pathname;
	function parse(arg) {
	var reqUrl = req.url;
	////console.log(reqUrl);
	var obj = url.parse(reqUrl, true);
	//console.log(obj.query.iso.toString());
	//console.log(obj.query.iso.constructor);
	//console.log(obj.query.iso.constructor == "String");
	var isoSplit = obj.query.iso.toString().split("T");
	var isoSplitOnZ = obj.query.iso.toString().split("Z");
	//console.log("length : "+ isoSplit.length);
	for (i=0; i<isoSplit.length; i++)
	{
		//console.log("i: " + i);
		//console.log(isoSplit[i]);
	}
	var timeSplit = isoSplit[1].toString().split(":");
	if (arg == "time") {
		return timeSplit;
	} else {
		return isoSplitOnZ;
	}
	}
	////console.log(obj.query.mytime);
	if (pathname == "/api/parsetime") {
		////console.log("path : /api/parsetime" );
		var timeSplit = parse("time");
		var timeOffset = ((new Date()).getTimezoneOffset())/60;
		//console.log("timeOffset" + timeOffset);
		res.writeHead(200, { 'Content-Type': 'application/json' });
		var objToJson = JSON.stringify({"hour" : parseInt(timeSplit[0])-timeOffset ,  "minute" : parseInt(timeSplit[1]) , "second" : parseInt(timeSplit[2].substr(0,2)) });
		res.write(objToJson);
		res.end();
	} else if (pathname == "/api/unixtime")
	{
		var timeSplit = parse("date");
		var date = new Date(timeSplit[0]);
		//console.log(date.getTime());
		res.writeHead(200, { 'Content-Type': 'application/json' });
		var objToJson = JSON.stringify({"unixtime" : date.getTime()});
		res.write(objToJson);
		res.end();
	} else
	{
		res.write("no content");
		res.end();
	}
}).listen(process.argv[2], '127.0.0.1');