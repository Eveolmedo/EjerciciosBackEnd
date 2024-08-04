const prompt = require("prompt-sync")();

let verdadero = true;
let texto = "hola";
let numero = 8;
let nada = null;

console.log(numero + 10);
console.log(texto + " ¿Como estas?");
if (verdadero) {
  console.log("Es verdadero");
} else console.log("Es falso");

if (nada) {
  console.log("Hay algo");
} else console.log("No hay nada");
