var fs = require('fs');
var src = 'img';

fs.readdir(src, function(err,files){
	files.forEach(function(filename){
		var oldpath = src + '/' + filename, newpath = src + '/' + filename.replace(/_/g, '-');
		fs.rename(oldpath, newpath, function(err){
			if(!err){
				console.log(filename + '下划线替换成功！');
			}
		})
	})
})