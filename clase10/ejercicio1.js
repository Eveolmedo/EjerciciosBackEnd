const prompt = require("prompt-sync")();

let vehiculo = prompt(
  "Ingrese el tipo de vehículo (coche, moto, autobús):"
).toLowerCase();
let litrosConsumidos = parseFloat(
  prompt("Ingrese la cantidad de litros consumidos:")
);

let precioPorLitro;

switch (vehiculo) {
  case "coche":
    precioPorLitro = 86;
    break;
  case "moto":
    precioPorLitro = 70;
    break;
  case "autobús":
    precioPorLitro = 55;
    break;
  default:
    console.log("Tipo de vehículo no válido.");
    precioPorLitro = 0;
    break;
}

let totalAPagar = precioPorLitro * litrosConsumidos;

if (litrosConsumidos > 0 && litrosConsumidos <= 25) {
  totalAPagar += 50;
} else if (litrosConsumidos > 25) {
  totalAPagar += 25;
}

console.log(`El total a pagar es: $${totalAPagar}`);
