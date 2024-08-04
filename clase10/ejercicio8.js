const prompt = require("prompt-sync")();

let paises = [];

// Solicitar al usuario que ingrese 5 países
for (let i = 0; i < 5; i++) {
  let pais = prompt(`Ingresa el país ${i + 1}:`);
  paises.push(pais);
}

// Ordenar el array en orden alfabético
paises.sort();

console.log("Los países en orden alfabético son: ");
for (let i = 0; i < paises.length; i++) {
  console.log(paises[i]);
}
