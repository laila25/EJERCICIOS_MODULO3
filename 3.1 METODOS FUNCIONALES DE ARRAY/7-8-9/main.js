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

let number = 100;
const functionPrueba = (acc, runner) => {
  if (runner.time < number) {
    number = runner.time;
    return (acc = runner);
  }
  return acc;
};

const winner = runners.reduce(functionPrueba, {});

console.log(winner);

// EJERCICIO 9

const runners2 = [
  { name: "Gregory Goyle", time: 56, student: true },
  { name: "Nymphadora Tonks", time: 9, student: false },
  { name: "Luna Lovegood", time: 45, student: true },
  { name: "Cedric Diggory", time: 28, student: true },
  { name: "Cho Chang", time: 35, student: true }
];

const runnerStudent = runners2.filter(runner => runner.student === true);
console.log(runnerStudent);

let number2 = 100;
const functionPrueba2 = (acc, runner) => {
  if (runner.time < number2) {
    number2 = runner.time;
    return (acc = runner);
  }
  return acc;
};

const runnerStudentWinner = runnerStudent.reduce(functionPrueba2, {});

console.log(runnerStudentWinner);
