/*
  javascript语言精粹3.6反射
 */
var flight = [1,2,4];
var flight1 = 'string';
var flight2 = 5;
var flight3 = {name:'cc'};

console.log(typeof flight);
console.log(typeof flight1);
console.log(typeof flight2);
console.log(typeof flight3);
console.log(flight2.hasOwnProperty('number'));
console.log(flight.hasOwnProperty('constructor'));