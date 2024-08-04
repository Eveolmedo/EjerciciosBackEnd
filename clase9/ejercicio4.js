const prompt = require("prompt-sync")();

let x = parseInt(prompt("Ingresa un número X:"));

let cont = 0;

for (let i = 0; i <= x; i++) {
  if (i % 2 !== 0) {
    cont++;
  }
}

console.log(
  `La cantidad de números impares desde 0 hasta ${x} (inclusive) es: ${cont}`
);
