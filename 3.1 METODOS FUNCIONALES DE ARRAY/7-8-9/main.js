"use strict";

// EJERCICIO 7

const times = [56, 9, 45, 28, 35];

const average = times.reduce((acc, number) => acc + number) / times.length;

console.log(average);

// EJERCICIO 8

const runners = [
  { name: "Gregory Goyle", time: 56 },
  { name: "Nymphadora Tonks", time: 9 },
  { name: "Luna Lovegood", time: 45 },
  { name: "Cedric Diggory", time: 28 },
  { name: "Cho Chang", time: 35 }
];

//const winner = runners.reduce((acc, number) => (acc = Math.min(...runners.time)));

console.log(Math.min(...times));

// EJERCICIO 9

const runners2 = [
  { name: "Gregory Goyle", time: 56, student: true },
  { name: "Nymphadora Tonks", time: 9, student: false },
  { name: "Luna Lovegood", time: 45, student: true },
  { name: "Cedric Diggory", time: 28, student: true },
  { name: "Cho Chang", time: 35, student: true }
];
