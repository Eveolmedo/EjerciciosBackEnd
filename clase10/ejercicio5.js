const prompt = require("prompt-sync")();

let nota = parseInt(prompt("Ingresa una nota (entre 0 y 100):"), 10);

let calificacion =
  nota >= 90 && nota <= 100
    ? "A"
    : nota >= 80 && nota <= 89
    ? "B"
    : nota >= 70 && nota <= 79
    ? "C"
    : nota >= 60 && nota <= 69
    ? "D"
    : nota >= 0 && nota <= 59
    ? "F"
    : "Nota inválida";

console.log(`La calificación en letras es: ${calificacion}`);
