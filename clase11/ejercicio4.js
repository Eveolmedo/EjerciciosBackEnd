const prompt = require("prompt-sync")();

let edad = prompt("Ingrese su edad: ");

const edadPerruna = (edad) => {
  return edad * 7;
};

console.log(`Su edad perruna es ${edadPerruna(edad)}`);
