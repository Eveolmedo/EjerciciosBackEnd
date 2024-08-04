const prompt = require("prompt-sync")();

let palabra = prompt(
  "Ingrese una palabra (casa, perro, pelota, árbol, genio):"
).toLowerCase();
let traduccion;

switch (palabra) {
  case "casa":
    traduccion = "house";
    break;
  case "perro":
    traduccion = "dog";
    break;
  case "pelota":
    traduccion = "ball";
    break;
  case "árbol":
    traduccion = "tree";
    break;
  case "genio":
    traduccion = "genius";
    break;
  default:
    console.log("La palabra ingresada es incorrecta.");
    traduccion = null;
}

if (traduccion) {
  console.log(`La traducción de "${palabra}" es "${traduccion}".`);
}
