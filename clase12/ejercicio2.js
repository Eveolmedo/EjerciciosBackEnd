/* Ejercicio 2: Calcular promedio de calificaciones
Solicita al usuario cinco calificaciones y usa una función flecha para calcular el promedio. */

const prompt = require("prompt-sync")();

let calificacion = [];

console.log(
  "A continuacion se pedira que ingrese las 5 calificaciones del alumno"
);

for (i = 0; i < 5; i++) {
  calificacion[i] = parseInt(prompt("Ingrese la calificacion: "));
}

const promedio = (calificacion) => {
  let promedio = 0;
  for (i = 0; i < 5; i++) {
    promedio += calificacion[i];
  }
  return promedio / 5;
};

console.log(`El promedio es ${promedio(calificacion)}`);
