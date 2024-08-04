const prompt = require("prompt-sync")();

// Ejercicio 3 - Calculadora Simple: Escribe un programa que pida al usuario dos números y una operación (suma, resta, multiplicación o división). Luego, realiza la operación indicada y muestra el resultado en la consola.

let num1 = prompt("Ingrese el primer numero: ");
let num2 = prompt("Ingrese el segundo numero: ");
let operador = prompt(
  "Ingrese el operador que desea usar (suma, resta, multiplicación o división): "
);

if (operador == "suma") {
  console.log(`El resultado es ${num1 + num2}`);
} else if (operador == "resta") {
  console.log(`El resultado es ${num1 - num2}`);
} else if (operador == "multiplicacion") {
  console.log(`El resultado es ${num1 * num2}`);
} else if (operador == "division" && num2 > 0) {
  console.log(`El resultado es ${num1 / num2}`);
} else console.log(`Ingrese un operador valido`);
