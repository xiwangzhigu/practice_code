/*
数组排序 正态分布
 */
var arr = [1,2,3,4,5,6,7,8,9];
var sortArr = arr.sort(function(a,b){
	return a-b;
}),l=arr.length;
var temp_left = [],temp_right = [];

function sort(arr){
  var i = 0;
  for(; i<l ; i++){
  	var eq = sortArr[i];
  	i%2 == 0?temp_left.push(eq):temp_right.unshift(eq);
  	if(i>1){
  		if(temp_left.length == temp_right.length && !compare(temp_left,temp_right)){
              wrap(temp_left,temp_right);
  		}
  	}
  }
  return temp_left.concat(temp_right);      
}

function sum(arr){
    return eval(arr.join("+"));
}

function compare(arr1,arr2){
     return sum(arr1) >= sum(arr2);
}

function wrap(l,r){
    var m = r.shift();
    r.unshift(l.pop());
    l.push(m);
}

console.log(sort(arr));//[ 1, 4, 6, 7, 9, 8, 5, 3, 2 ]