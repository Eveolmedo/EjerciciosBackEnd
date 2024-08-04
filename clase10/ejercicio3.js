const prompt = require("prompt-sync")();

let suma = 0;
let numero;

while (true) {
  numero = parseFloat(
    prompt("Ingresa un número (o un número negativo para finalizar):")
  );

  if (numero < 0) {
    break;
  }

  suma += numero;
}

console.log(`La suma de todos los números ingresados es: ${suma}`);
