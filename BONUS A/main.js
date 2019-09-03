"use strict";

class Polygon {
  constructor(numberOfSides, base, height) {
    this.numberOfSides = numberOfSides;
    this.base = base;
    this.height = height;
  }

  perimeter() {
    console.log(this.base * this.numberOfSides);
  }

  area() {
    console.log(this.base * this.height);
  }
}

class Square extends Polygon {
  constructor(base) {
    super(4, base, height);
    this.side = this.base;
  }
}

class Triangle extends Polygon {
  constructor(base, height) {}
  area() {
    console.log(super.area() / 2);
  }
}

const cuadrado = new Square(4);
const triangulo = new Triangle(4, 3);

cuadrado.perimeter();
cuadrado.area();

triangulo.perimeter();
triangulo.area();
