const prompt = require("prompt-sync")();

/* 
Ejercicio 6: 
Pide al usuario que ingrese su edad y verifica si es mayor o menor de edad. Muestra un mensaje personalizado según el caso. */

let edad = parseInt(prompt("Ingrese su edad: "));

if (edad >= 18) {
  console.log("Puede ingresar");
} else console.log("No puede ingresar tiene que ser mayor de edad");
