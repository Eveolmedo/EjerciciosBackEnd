const prompt = require("prompt-sync")();

let pulgadas = prompt("Ingrese las pulgadas a convertir: ");

const convertidor = (pulgadas) => {
  return pulgadas * 2.54;
};

console.log(`${pulgadas} pulgadas son ${convertidor(pulgadas)} centimetros`);
