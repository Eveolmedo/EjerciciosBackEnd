const prompt = require("prompt-sync")();

let edad = 0;
let peso = 0;

let nombre = prompt("Ingrese su nombre: ");
edad = parseInt(prompt("Ingrese su edad: "));
peso = prompt("Ingrese su peso: ");

console.log(`Su nombre es ${nombre} tiene ${edad} años y pesa ${peso}kg`);
