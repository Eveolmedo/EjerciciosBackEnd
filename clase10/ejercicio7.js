const prompt = require("prompt-sync")();

let nombres = [];

for (let i = 0; i < 5; i++) {
  let nombre = prompt(`Ingresa el nombre ${i + 1}: `);
  nombres.push(nombre);
}

let nombreBuscado = prompt("Ingresa un nombre para buscar en la lista: ");

if (nombres.includes(nombreBuscado)) {
  console.log(`El nombre "${nombreBuscado}" está en la lista.`);
} else {
  console.log(`El nombre "${nombreBuscado}" no está en la lista.`);
}
