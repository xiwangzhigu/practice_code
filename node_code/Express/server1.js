var express = require('express');
var app =express();
var bodyParser = require('body-parser');

var urlencodeParser = bodyParser.urlencoded({extended: false})

app.use(express.static('images'));

app.get('/index1.htm', function(req,res){
	res.sendFile(__dirname + "/" + "index1.htm");
})

app.post('/process_post', urlencodeParser,function(req, res){
      response = {
      	first_name:req.body.first_name,
      	last_name:req.body.last_name
      };
      console.log(response);
      res.end(JSON.stringify(response));
})

var server = app.listen(8084,function(){
	var host = server.address().address;
	var port = server.address().port;
	console.log('应用实例，访问地址为http://%s:%s', host, port);
})
