/* Ejercicio 3: Clasificación de edades
Solicita al usuario una edad y usa una función flecha para clasificarla en niño,
adolescente, adulto o adulto mayor. */

const prompt = require("prompt-sync")();

let edad = parseInt(prompt("Ingrese su edad: "));

const clasificacionEdad = (edad) => {
  if (edad <= 10) {
    return "Usted es un niño";
  } else if (edad <= 18) {
    return "Usted es un adolecente";
  } else if (edad <= 60) {
    return "Usted es un adulto";
  } else return "Usted es un adulto mayor";
};

console.log(clasificacionEdad(edad));
