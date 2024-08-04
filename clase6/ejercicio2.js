const prompt = require("prompt-sync")();

/* • Ejercicio 2 - Comparación de Tres Números: Escribe un programa que pida al usuario tres números y determine cuál es el mayor de los tres. Muestra el número mayor en la consola.
Pista: En este ejercicio utiliza if, else if y else. Tambien no olvides usar “let” para definir variables.
Pista 2: Investiga que es parseFloat, ya que este ejercicio lo necesitaras. */

let num1 = prompt("Ingrese el primer numero: ");
let num2 = prompt("Ingrese el segundo numero: ");
let num3 = prompt("Ingrese el tercer numero: ");

if (num1 > num2 && num1 > num3) {
  console.log(`El mayor es el primer numero: ${num1}`);
} else if (num2 > num1 && num2 > num3) {
  console.log(`El mayor es el segundo numero: ${num2}`);
} else console.log(`El mayor es el tercer numero: ${num3}`);
