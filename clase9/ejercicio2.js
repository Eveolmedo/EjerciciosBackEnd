const prompt = require("prompt-sync")();
let dia = prompt("Que dia es hoy?: ");

switch (dia) {
  case "lunes":
  case "miércoles":
  case "viernes":
    console.log("tenés clases");
    break;
  default:
    console.log("no tenés clases");
}
