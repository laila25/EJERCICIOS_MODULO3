"use strict";

class Square {
  constructor(side) {
    this.side = side;
  }

  perimeter() {
    console.log(this.side * 4);
  }

  area() {
    console.log(this.side * this.side);
  }
}

const poligon1 = new Square(1);
const poligon2 = new Square(3);
const poligon3 = new Square(7);

poligon1.perimeter();
poligon1.area();

poligon2.perimeter();
poligon2.area();

poligon3.perimeter();
poligon3.area();
