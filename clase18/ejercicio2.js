/* Ejercicio 2: Análisis y Modificación de Cadenas de Texto
Pide al usuario que ingrese una oración. Luego, escribe la función “procesarOracion” que haga lo siguiente: */

const prompt = require("prompt-sync")();

let oracion = prompt("Ingrese una oracion: ");

const procesarOracion = (oracion) => {
  // 1. Quite los espacios en blanco al principio y al final.
  oracion = oracion.trim();

  // 2. Divida la oración en palabras.
  let dividirOracion = oracion.split(" ");

  // 3. Reemplace todas las vocales 'a' por '@'. Tener en cuenta utilizar “/a/g” que indica que se debe buscar todas las apariciones del carácter 'a' en la cadena (la bandera g es para global, lo que significa que reemplazará todas las apariciones, no solo la primera).
  let nuevaOracion = oracion.replace(/a/g, "@");

  // 4. Encuentre la posición de la primera aparición de la palabra "javascript". De no aparecer retornar -1
  let posicion = dividirOracion.indexOf("javascript");

  // 5. Convierta la oración a una cadena de palabras separadas por guiones.
  let separarOracion = oracion.join("-");

  return {
    dividirOracion: dividirOracion,
    nuevaOracion: nuevaOracion,
    posicion: posicion,
  };
};

console.log(procesarOracion(oracion));
