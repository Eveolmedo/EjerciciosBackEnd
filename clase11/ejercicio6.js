const prompt = require("prompt-sync")();

let altura = prompt("Ingrese su altura en metros: ");
let peso = prompt("Ingrese su peso el kilogramos: ");

const calculadorIMC = (altura, peso) => {
  return parseFloat(peso / (altura * altura));
};

console.log(`Su indice de masa corporal es de ${calculadorIMC(altura, peso)}`);
