var bubbleSort = function(arr){
     var flag = true;
     var len = arr.length;
     for(var i = 0; i < len-1;i++){
     	flag = true;
     	for(var j = 0;j < len-1-i;j++){
     		if (arr[j] > arr[j + 1]) {
              var temp = arr[j+1];
              arr[j+1] = arr[j];
              arr[j] = temp;
              flag = false;
          }
     	}
     	if(flag){   //保证数组有序时提前结束，以免不必要的时间和空间复杂度
     		break;
     	}
     }
}

var arr = [3,4,11,7,6,5,17,7];
bubbleSort(arr);
console.log(arr);