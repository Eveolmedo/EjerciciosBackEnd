/* Define una constante PI con el valor de pi (3.14159). Pide al usuario que ingrese el radio de un círculo y calcula su área y perímetro utilizando la constante PI. */

const prompt = require("prompt-sync")();

const PI = 3.14159;

let radio = prompt("Ingrese el radio del circulo: ");

console.log(
  `El area del circulo es: ${PI * (radio * radio)} 
  y el perimetro es: ${2 * PI * radio}`
);
