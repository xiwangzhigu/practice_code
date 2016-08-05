/*
插入排序
 */
var insertSort = function(arr){
     var len = arr.length,key;
     for(var i = 1; i < len; i++){
     	var j =i;
     	key = arr[j];
     	while(--j>-1){
     		if(arr[j] > key){
     			arr[j+1] = arr[j];
     		}else{
     			break;
     		}
     	}
     	arr[j+1] = key;
     }
     return arr;
}

var arr = [3,4,11,7,6,5,17,7];
console.log(insertSort(arr));//[ 3, 4, 5, 6, 7, 7, 11, 17 ]