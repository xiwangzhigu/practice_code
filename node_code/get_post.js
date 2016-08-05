/*var http = require('http');
var url = require('url');
var util = require('util');

http.createServer(function(req,res){
	res.writeHead(200,{'Content-Type':'text/plain'});
	res.end(util.inspect(url.parse(req.url,true)));
}).listen(3000);*/


var http = require('http');
var querystring = require('querystring');
var util = require('util');

http.createServer(function(req,res){
	var post ='';
	req.on('data',function(chunk){
        post+=chunk;
	});
	req.on('end', function() {
		post = querystring.parse(post);
		res.end(util.inspect(post));
	});
}).listen(3000);