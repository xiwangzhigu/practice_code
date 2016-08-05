var express = require('express');
var app = express();

app.use(express.static('images'));

app.get('/index.htm', function(req, res){
	//console.log(__dirname);
   res.sendFile(__dirname + "/" + "index.htm");
})

app.get('/process_get', function(req, res){
      response = {
      	first_name:req.query.first_name,
      	last_name:req.query.last_name
      };
      console.log(response);
      res.end(JSON.stringify(response));
})

var server = app.listen(8083,function(){
	var host = server.address().address;
	var port = server.address().port;
	console.log('应用实例，访问地址为http://%s:%s', host, port);
})