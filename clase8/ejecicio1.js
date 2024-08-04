const prompt = require("prompt-sync")();
/* Ejercicio 1: 
Declara dos variables numéricas numero1 y numero2. Pide al usuario que ingrese dos números y muestra cuál es mayor o si son iguales. */

let numero1 = prompt("Ingrese un numero: ");
let numero2 = prompt("Ingrese otro numero: ");

if (numero1 > numero2) {
  console.log(`El mayor es ${numero1}`);
} else if (numero1 === numero2) {
  console.log("Numeros iguales");
} else console.log(`El mayor es ${numero2}`);
