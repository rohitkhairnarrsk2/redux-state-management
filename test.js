// class Shape {}
// Shape.prototype.sum = function (a, b) {
//   console.log(a + b);
// };
// Shape.prototype.a = 2;
// Shape.prototype.a = 210;
// const obj = new Shape();
// // let obj2 = {};
// // obj2.prototype.xyz = 10;
// console.log(obj.a);
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

const p = new Rectangle(99, 0);
Rectangle.prototype.width = 10;
console.log(p.width);
