const prompt = require("prompt-sync")();

let edad = parseInt(prompt("Ingrese su edad: "));

const EDAD_MINIMA = 18;
const EDAD_MAXIMA = 99;

if (EDAD_MINIMA < edad && EDAD_MAXIMA > edad) {
  console.log("EDAD PERMITIDA");
} else console.log("EDAD DENEGADA");
