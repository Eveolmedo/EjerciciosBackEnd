const prompt = require("prompt-sync")();

// Solicitar al usuario que ingrese un número natural de hasta 2 cifras
const numero = parseInt(
  prompt("Introduce un número natural de hasta 2 cifras: ")
);

// Validar que el número ingresado sea un número natural válido de hasta 2 cifras
if (isNaN(numero) || numero < 0 || numero > 99) {
  console.log("Por favor, introduce un número válido de hasta 2 cifras.");
} else {
  if (numero < 10) {
    // Si el número tiene 1 cifra, falta para el siguiente umbral de 2 cifras
    const faltaParaDosCifras = 10 - numero;
    console.log(
      `Te falta ${faltaParaDosCifras} para llegar a un número de 2 cifras.`
    );
  } else if (numero < 100) {
    // Si el número tiene 2 cifras, falta para el siguiente umbral de 3 cifras
    const faltaParaTresCifras = 100 - numero;
    console.log(
      `Te falta ${faltaParaTresCifras} para llegar a un número de 3 cifras.`
    );
  }
}
