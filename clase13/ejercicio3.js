const prompt = require("prompt-sync")();

// Generar un número aleatorio del 1 al 10
const numeroSecreto = Math.floor(Math.random() * 10) + 1;
const adivinarNumero = () => {
  const intento = parseInt(prompt("Adivina el número del 1 al 10: "), 10);
  if (isNaN(intento) || intento < 1 || intento > 10) {
    console.log("Por favor, introduce un número válido entre 1 y 10.");
    return false;
  }
  return intento === numeroSecreto;
};

const jugar = () => {
  if (adivinarNumero()) {
    console.log("Felicitaciones, ¡era ese!");
  } else {
    console.log("Nooo, ¡intenta nuevamente!");
  }
};

jugar();
