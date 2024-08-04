const prompt = require("prompt-sync")();

/* Ejercicio 5:
Escribe un programa que pida al usuario que ingrese tres números y determine cuál es el mayor de los tres. */

let num1 = prompt("Ingrese el primer numero: ");
let num2 = prompt("Ingrese el segundo numero: ");
let num3 = prompt("Ingrese el tercer numero: ");

if (num1 > num2 && num1 > num3) {
  console.log(`El numero mayor es: ${num1}`);
} else if (num2 > num1 && num2 > num3) {
  console.log(`El numero mayor es: ${num2}`);
} else console.log(`El numero mayor es: ${num3}`);
