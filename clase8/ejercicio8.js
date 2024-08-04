/* Pide al usuario que ingrese las longitudes de los tres lados de un triángulo. Determina y muestra si el triángulo es equilátero, isósceles (DOS IGULES) o escaleno. (Investiga sobre los triángulos para determinar la formula) */

const prompt = require("prompt-sync")();

let ladoA = prompt("Ingrese la longitud del lado A: ");
let ladoB = prompt("Ingrese la longitud del lado B: ");
let ladoC = prompt("Ingrese la longitud del lado C: ");

if (ladoA == ladoB && ladoA == ladoC) {
  console.log("TRIANGULO EQUILATERO");
} else if (ladoA != ladoB && ladoA != ladoC) {
  console.log("TRIANGULO ESCALENO");
} else console.log("TRIANGULO ISOCELES");
