//1.使用!!操作符转换布尔值
function Account(cash) {
    this.cash = cash;
    this.hasMoney = !!cash;
}
var account = new Account(100.50);
console.log(account.cash); // 100.50
console.log(account.hasMoney); // true

var emptyAccount = new Account(0);
console.log(emptyAccount.cash); // 0
console.log(emptyAccount.hasMoney); // false

//2.使用+将字符串转换成数字
function toNumber(strNumber){
	return +strNumber;
}
console.log(toNumber('19920703'));
console.log(toNumber('cc'));
console.log(+new Date());

//3.并条件符    connected && login()   user && user.login()

//4.使用||运算符
function User(name, age) {
    this.name = name || "Oliver Queen";
    this.age = age || 27;
}
var user1 = new User();
console.log(user1.name); // Oliver Queen
console.log(user1.age); // 27

var user2 = new User("Barry Allen", 25);
console.log(user2.name); // Barry Allen
console.log(user2.age); // 25


//5.在循环中缓存array.length
/*var length = array.length;
for(var i = 0; i < length; i++) {
    console.log(array[i]);
}*/

//6.检测对象中的属性
/*if ('querySelector' in document) {
    document.querySelector("#id");
} else {
    document.getElementById("id");
}*/

//7.获取数组中最后一个元素
var array = [1,2,3,4,5,6];
console.log(array.slice(-1)); // [6]
console.log(array.slice(-2)); // [5,6]
console.log(array.slice(-3)); // [4,5,6]


//8.数组截断
var array = [1,2,3,4,5,6];
console.log(array.length); // 6
array.length = 3;
console.log(array.length); // 3
console.log(array); // [1,2,3]


//9.替换所有
var string = "john john";
console.log(string.replace(/hn/, "ana")); // "joana john"
console.log(string.replace(/hn/g, "ana")); // "joana joana"


//10.合并数组
var a1 = [1,2,3];
var a2 = [4,5,6];
console.log(a1.concat(a2));

//11将NodeList转换成数组
//var elements = document.querySelectorAll("p"); // NodeList
//var arrayElements = [].slice.call(elements); // Now the NodeList is an array
//var arrayElements = Array.from(elements); // This is another way of converting NodeList to Array

//12.数组元素洗牌
var list = [1,2,3];
console.log(list.sort(function() { return Math.random() - 0.5 })); // [2,1,3]