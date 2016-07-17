/*
  String原型扩展方法  
 */
String.prototype.repeatify = String.prototype.repeatify || function(numbers){
    var str = '';
    for(var i = 0; i < numbers; i++){
    	str += this;
    }
    return str;
}
console.log(String.prototype.repeatify);
console.log('科比.'.repeatify(7));