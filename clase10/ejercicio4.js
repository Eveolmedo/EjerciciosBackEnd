const prompt = require("prompt-sync")();

let contraseña;

do {
  contraseña = prompt("Ingresa la contraseña:");
} while (contraseña !== "1234");

console.log("Contraseña correcta. Acceso concedido.");

// LO SIGUE REPITIENDO HASTA QUE SEA 1234
