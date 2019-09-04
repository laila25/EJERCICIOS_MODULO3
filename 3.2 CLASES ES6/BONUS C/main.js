"use strict";

class Polygon {
  constructor(numberOfSides, base, height) {
    this.numberOfSides = numberOfSides;
    this.base = base;
    this.height = height;
  }

  perimeter() {
    let perimeterPolygon;
    return (perimeterPolygon = this.base * this.numberOfSides);
  }

  area() {
    console.log(this.base * this.height);
    return this.base * this.height;
  }
}

class Square extends Polygon {
  constructor(side) {
    super(4, side, side);
    this.side = this.base;
  }
}

const cuadrado = new Square(5);
console.log(cuadrado.perimeter());
