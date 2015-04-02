var net = require('net');
var tcpserver = net.createServer(function(socket) {
	var date = new Date();
	var year = date.getFullYear();
	var month = date.getMonth() + 1;
	var day = date.getDate();
	var hours = date.getHours();
	var minutes = date.getMinutes();
	var seconds = date.getSeconds();
	socket.write(year+"-"+month+"-"+day+" "+hours+":"+minutes+"\n");
	//socket.pipe(socket);
	socket.end();
});
tcpserver.listen(process.argv[2], '127.0.0.1');
