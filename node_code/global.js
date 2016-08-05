//所在位置绝对路径
console.log(__filename);

//当前脚本所在目录
console.log(__dirname);


function print(){
	console.log('hello world');
}
setTimeout(print,2000);

setInterval(print,2000);

console.log('当前目录: '+process.cwd());

console.log('当前版本: '+process.version);

console.log(process.memoryUsage());