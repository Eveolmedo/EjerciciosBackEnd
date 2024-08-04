const prompt = require("prompt-sync")();
let notas = [];

// 2. Pedir al usuario cuántas notas va a ingresar
let cantidadNotas = parseInt(prompt("¿Cuántas notas vas a ingresar? "));

for (let i = 0; i < cantidadNotas; i++) {
  let nota = parseFloat(prompt(`Ingresa la nota del estudiante ${i + 1}: `));
  notas.push(nota);
}

console.log("Las notas ingresadas son: ");
for (let i = 0; i < notas.length; i++) {
  console.log(`Estudiante ${i + 1}: ${notas[i]}`);
}
