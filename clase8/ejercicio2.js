const prompt = require("prompt-sync")();

/* Ejercicio 2: 
Define dos constantes, RANGO_MINIMO y RANGO_MAXIMO, con valores numéricos de tu elección. Pide al usuario que ingrese un número y verifica si está dentro del rango definido por las constantes. */

const RANGO_MINIMO = 1;
const RANGO_MAXIMO = 10;

let numero = prompt("Ingrese un numero: ");

console.log(
  `El numero esta el rango establecido? ${
    numero >= RANGO_MINIMO && numero <= RANGO_MAXIMO
  }`
);
