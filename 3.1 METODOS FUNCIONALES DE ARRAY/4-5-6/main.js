"use strict";

//EJERCICIO 4

const users = [
  { name: "María", isPremium: false },
  { name: "Lucía", isPremium: true },
  { name: "Susana", isPremium: true },
  { name: "Rocío", isPremium: false },
  { name: "Inmaculada", isPremium: false }
];

const premiumUsers = users.filter(user => user.isPremium === true);

console.log(premiumUsers);

// EJERCICIO 5

const pins = [2389, 2384, 2837, 5232, 8998];

const evenPins = pins.filter(pin => pin % 2 === 0);

console.log(evenPins);

// EJERCICIO 6

const users2 = [
  { name: "María", isPremium: false, pin: 2389 },
  { name: "Lucía", isPremium: true, pin: 2384 },
  { name: "Susana", isPremium: true, pin: 2837 },
  { name: "Rocío", isPremium: false, pin: 5232 },
  { name: "Inmaculada", isPremium: false, pin: 8998 }
];

const acceptedUsers = users2.filter(user => user.pin % 2 === 0);

console.log(acceptedUsers);
