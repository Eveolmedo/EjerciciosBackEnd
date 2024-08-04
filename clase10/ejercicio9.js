const prompt = require("prompt-sync")();

let colores = ["rojo", "verde", "azul", "amarillo"];

console.log("Colores originales:");
for (let i = 0; i < colores.length; i++) {
  console.log(colores[i]);
}

// Modificar el primer color del array a "blanco"
colores[0] = "blanco";

// Agregar dos nuevos colores al final del array: "negro" y "gris"
colores.push("negro", "gris");

// Imprimir todos los colores del array después de las modificaciones
console.log("Colores después de las modificaciones:");
for (let i = 0; i < colores.length; i++) {
  console.log(colores[i]);
}
