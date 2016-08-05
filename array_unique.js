/*
  method1  遍历数组
 */
function unique(a){
    var res = [];
    for(var i = 0,len = a.length; i < len; i++){
        for(var j = 0,jlen = res.length; j < jlen; j++){
        	if(res[j] === a[i])
        		break;
        }
        if(j === jlen)
        	res.push(a[i]);
    }
    return res;
}

var a = [1,1,'1','3',1];
var u = unique(a);
console.log(u);

