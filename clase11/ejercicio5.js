const prompt = require("prompt-sync")();

let sueldo = prompt("Ingrese su sueldo: ");

const horasTrabajadas = (sueldo) => {
  return sueldo / 40;
};

console.log(`Tiene ${horasTrabajadas(sueldo)} horas trabajadas`);
