"use strict";

class Square {
  perimeter(side) {
    console.log(side * 4);
  }

  area(side) {
    console.log(side * side);
  }
}

const polygon = new Square();

polygon.perimeter(9);
polygon.area(9);
