var fs = require('fs');
var data = '';

//创建可读流
var readerStream = fs.createReadStream('input.txt');
readerStream.setEncoding('utf8');

//处理事件流
readerStream.on('data', function(chunk) {
	data += chunk;
});

readerStream.on('end', function() {
	console.log(data);
});

readerStream.on('error', function(err) {
	console.log(err.stack);
});

console.log('程序执行完毕');

var data1 = 'www.baidu.com';
var writeStream = fs.createWriteStream('output.txt');

writeStream.write(data1,'utf8');

writeStream.end();

writeStream.on('finish', function() {
	console.log('写入完成');
});

writeStream.on('error', function(err) {
	console.log(err.stack);
});

writeStream = fs.createWriteStream('output1.txt');
readerStream.pipe(writeStream);

console.log('程序执行完毕');