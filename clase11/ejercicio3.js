const prompt = require("prompt-sync")();

let string = prompt("Ingrese una frase: ");

const frase = (string) => {
  return `¡${string}!`;
};

console.log(frase(string));
