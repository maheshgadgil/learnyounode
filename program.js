var through = require('through');
var split = require('split');
var concat = require('concat-stream');

//var tr = through(write, end);
/*
var first = false;
function write(data){
	//console.log('start');	
	if (first) 
	{
		this.queue(data.toString());
		first = false;
	} else 
	{
		this.queue(data.toString().toUpperCase());
		first = true;
	}
} 
function end(){
		this.queue(null);
} */
//var str
process.stdin.pipe(concat(function (body) {
    process.stdout.write(reverse(body.toString()));
}));
function reverse(s){
    return s.split("").reverse().join("");
}



