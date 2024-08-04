const prompt = require("prompt-sync")();

// Función flecha para convertir dólares a pesos
const convertirADolaresAPesos = (montoDolares, tasaDeCambio) =>
  montoDolares * tasaDeCambio;

// Solicitar al usuario el monto en dólares y la tasa de cambio
const montoDolares = parseFloat(prompt("Introduce el monto en dólares: "));
const tasaDeCambio = parseFloat(
  prompt("Introduce la tasa de cambio a pesos: ")
);

// Validar que los datos ingresados sean números positivos
if (
  isNaN(montoDolares) ||
  isNaN(tasaDeCambio) ||
  montoDolares < 0 ||
  tasaDeCambio < 0
) {
  console.log("Por favor, introduce valores válidos.");
} else {
  const montoPesos = convertirADolaresAPesos(montoDolares, tasaDeCambio);

  console.log(`El monto en pesos es: ${montoPesos}`);
}
