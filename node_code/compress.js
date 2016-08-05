var fs = require('fs');
var zlib = require('zlib');

fs.createReadStream('input.txt')
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream('compress.txt.gz'));

  console.log('文件压缩完成。');