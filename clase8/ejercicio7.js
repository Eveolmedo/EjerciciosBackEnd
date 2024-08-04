const prompt = require("prompt-sync")();

/* Pide al usuario que ingrese su peso en kilogramos y conviértelo a libras. Muestra el resultado con un mensaje. (Averigua como pasar de kg a libras, Pista: 2.20462) */

let kilogramos = prompt("Ingrese un peso en kilogramos: ");

console.log(`${kilogramos} kg son ${kilogramos * 2.20462} libras`);
