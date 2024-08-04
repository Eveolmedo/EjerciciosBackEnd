const prompt = require("prompt-sync")();

let string = prompt("Ingrese una palabra: ");

const url = (string) => {
  return `http://www.${string}.com`;
};

console.log(url(string));
