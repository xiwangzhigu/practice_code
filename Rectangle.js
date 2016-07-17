/*
  prototype原型属性
 */
function Rectangle(x, y){
	this.x = x;
	this.y = y;
}

Rectangle.prototype.perimeter = function(){
	return 2*(this.x + this.y);
}

var rect = new Rectangle(3,7);
console.log(rect.perimeter());