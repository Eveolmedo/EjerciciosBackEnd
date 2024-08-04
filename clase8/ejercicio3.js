const prompt = require("prompt-sync")();

/* Ejercicio 3:
Declara dos variables booleanas condicion1 y condicion2. Pide al usuario que ingrese dos valores booleanos (true o false) y muestra el resultado de diversas combinaciones lógicas.*/

let condicion1 = prompt("Ingrese true o false: ");
let condicion2 = prompt("Vuelva a ingresar true o false: ");

console.log(`${condicion1} == ${condicion2}: ${condicion1 == condicion2}`);
console.log(`${condicion1} && ${condicion2}: ${condicion1 && condicion2}`);
console.log(`${condicion1} || ${condicion2}: ${condicion1 || condicion2}`);
