/*
查找重复元素
version1
 */
function duplicates(arr) {
    var unique = [];
    var multi = [];
     for(var i = 0; i < arr.length;++i){
         if(unique.indexOf(arr[i])==-1){
             unique.push(arr[i]);
         }
         else{
             if(multi.indexOf(arr[i])==-1){
             multi.push(arr[i]);
         }
     }
   }
    return multi;
}
var array = [1,2,4,4,3,3,1,5,3];
console.log(duplicates(array).sort());

/*
version2
 */
function duplicates_1(arr) {
 var result = [];
    arr.forEach(function(elem){
       if(arr.indexOf(elem) !=arr.lastIndexOf(elem) && result.indexOf(elem) == -1){
           result.push(elem);
       }
    });
    return result;
}
console.log(duplicates_1(array).sort());