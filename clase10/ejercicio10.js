const prompt = require("prompt-sync")();

let mascotas = [];
let edades = [];
let agregarMas = true;

// Usando do...while para permitir al usuario ingresar datos
do {
  let mascota = prompt("Ingresa el nombre de la mascota: ");
  let edad = parseInt(prompt("Ingresa la edad de la mascota: "));

  mascotas.push(mascota);
  edades.push(edad);

  let agregarMas = prompt("¿Quieres agregar otra mascota si o no? ");
} while (agregarMas == "no");

// Imprimir las mascotas y sus edades
console.log("Lista de mascotas y sus edades:");
for (let i = 0; i < mascotas.length; i++) {
  console.log(`Mascota: ${mascotas[i]}, Edad: ${edades[i]}`);
}
