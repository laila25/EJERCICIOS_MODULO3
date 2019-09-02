"use strict";

//EJERCICIO 1
const marks = [5, 4, 6, 7, 9];

const inflatedMarks = marks.map(mark => mark + 1);

console.log(inflatedMarks);

//EJERCICIO 2
const names = ["María", "Lucía", "Susana", "Rocío", "Inmaculada"];

const greetNames = names.map(name => `Bienvenida ${name}`);

console.log(greetNames);

//EJERCICIO 3
const users = [
  { name: "María", isPremium: false },
  { name: "Lucía", isPremium: true },
  { name: "Susana", isPremium: true },
  { name: "Rocío", isPremium: false },
  { name: "Inmaculada", isPremium: false }
];

const getgreetUsers = user => {
  debugger;
  if (user.isPremium === true) {
    `Bienvenida ${user.name}. Gracias por confiar en nosotros.'`;
  } else {
    `Bienvenida ${user.name}`;
  }
};

const greetUsers = users.map(getgreetUsers);

console.log(greetUsers);
