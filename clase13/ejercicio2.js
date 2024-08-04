/* Ejercicio 2: Verificar estado de vacunación
Solicita al usuario el nombre de su mascota y si está vacunada. Usa una
función flecha para verificar y mostrar su estado de vacunación. */

const prompt = require("prompt-sync")();

// Solicitar al usuario el nombre de la mascota
const nombreMascota = prompt("Introduce el nombre de tu mascota: ");

// Solicitar al usuario si la mascota está vacunada
const estaVacunada = prompt("¿Está vacunada tu mascota? (sí/no): ");

// Verificar el estado de vacunación
const verificarVacunacion = (nombreMascota, estaVacunada) => {
  return estaVacunada.toLowerCase() === "sí"
    ? `${nombreMascota} está vacunada.`
    : `${nombreMascota} no está vacunada.`;
};

// Mostrar el resultado
console.log(verificarVacunacion());
