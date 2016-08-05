var http = require('http');

function onrequest(req,res){
	res.writeHead(200,{'Content-Type':'text/plain'});
	res.write('Hello World');
	res.end();
}
//函数传递让HTTP服务器工作
http.createServer(onrequest).listen(8888);