const prompt = require("prompt-sync")();

let celsius = parseInt(prompt("Ingrese una temperatura en Celsius: "));
let fahrenheit = parseFloat((celsius * 9) / 5 + 32);

console.log(`${celsius}C° son ${fahrenheit}F°`);
