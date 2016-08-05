/*
选择排序
 */
var selectSort = function(arr){
	var temp;
     for(var i = 0; i < arr.length-1; i++){
     	for(var j = i+1;j < arr.length; j++){
     		if(arr[i] > arr[j]){
                   temp = arr[j];
                   arr[j] = arr[i];
                   arr[i] = temp;
     		}
     	}
     }
     return arr;
}
var arr = [1,3,7,4,14,17,13,2,6,8];
console.log(selectSort(arr));//[ 1, 2, 3, 4, 6, 7, 8, 13, 14, 17 ]