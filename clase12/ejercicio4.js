/* Ejercicio 4: Calcular descuento por cantidad
Solicita al usuario la cantidad de productos comprados y el precio unitario.
Usa una función flecha para calcular el total con descuento según la cantidad. */

const prompt = require("prompt-sync")();

let cantidadProductos = parseInt(
  prompt("Ingrese la cantidad de productos que compro: ")
);

let precioUnitario = [];
let total = 0;

for (i = 0; i < cantidadProductos; i++) {
  precioUnitario[i] = parseInt(prompt(`Ingrese el producto numero ${i + 1}: `));
  total += precioUnitario[i];
}

const descuento = (cantidadProductos) => {
  let promedio = (100 * cantidadProductos) / total;
  return total - promedio;
};

console.log(descuento(cantidadProductos));
