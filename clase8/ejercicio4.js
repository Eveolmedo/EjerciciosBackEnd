const prompt = require("prompt-sync")();

/* Ejercicio 4: 
Declara una variable nombre y pide al usuario que ingrese su nombre. Verifica si el nombre ingresado es igual a tu nombre. */

let nombre = prompt("Ingrese su nombre: ");
const miNombre = "Evelyn";

if (nombre === miNombre) {
  console.log(`Tenemos el mismo nombre ${nombre}`);
} else console.log(`Hola ${nombre}`);
