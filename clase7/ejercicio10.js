const prompt = require("prompt-sync")();

let precio = parseFloat(prompt("Ingrese el precio del producto: "));
let porcentaje = parseFloat(
  prompt("Ingrese el porcentaje de descuento sin %: ")
);
let total = parseFloat(precio * (porcentaje / 100));

console.log(`El monto total es ${total}`);
