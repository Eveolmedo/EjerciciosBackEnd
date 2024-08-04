const prompt = require("prompt-sync")();

// Solicitar al usuario que ingrese el límite N
const N = parseInt(prompt("Introduce el número límite (N): "));

// Validar que el número ingresado sea un número natural positivo
if (isNaN(N) || N <= 0) {
  console.log("Por favor, introduce un número natural positivo.");
} else {
  // Calcular la suma de los primeros N números naturales
  let suma = 0;
  for (let i = 1; i <= N; i++) {
    suma += i;
  }

  console.log(`La suma de los primeros ${N} números naturales es: ${suma}`);
}
