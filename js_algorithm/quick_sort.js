/*
通过一趟排序将要排序的数据分割成独立的两部分，
其中一部分的所有数据都比另外一部分的所有数据都要小，
然后再按此方法对这两部分数据分别进行快速排序，整个排序过程可以递归进行，以此达到整个数据变成有序序列。
 */
var quickSort = function(arr) {
　　if (arr.length <= 1) { return arr; }
　　var pivotIndex = Math.floor(arr.length / 2);//向下取整 11/2=5
　　var pivot = arr.splice(pivotIndex, 1)[0];//45
　　var left = [];
　　var right = [];
　　for (var i = 0; i < arr.length; i++){
　　　　if (arr[i] < pivot) {
　　　　　　left.push(arr[i]);
　　　　} else {
　　　　　　right.push(arr[i]);
　　　　}
　　}
　　return quickSort(left).concat([pivot], quickSort(right));
};
var arr = [85,17,24,24,63,45,17,31,24,96,50];
console.log(arr);
console.log(quickSort(arr));//[ 17, 17, 24, 24, 24, 31, 45, 50, 63, 85, 96 ]