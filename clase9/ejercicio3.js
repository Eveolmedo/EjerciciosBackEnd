const prompt = require("prompt-sync")();

let valoracion = prompt(
  "¿Cómo valorarías la película? (Muy mala, Mala, Mediocre, Buena, Muy buena)"
).toLowerCase();

switch (valoracion) {
  case "muy mala":
    console.log("Calificaste la película como Muy Mala. Lo lamentamos mucho.");
    break;
  case "mala":
    console.log("Calificaste la película como Mala. Lo lamentamos.");
    break;
  case "mediocre":
    console.log(
      "Calificaste la película como Mediocre. Esperamos que la próxima sea mejor."
    );
    break;
  case "buena":
    console.log(
      "Calificaste la película como Buena. Nos alegra que la hayas disfrutado."
    );
    break;
  case "muy buena":
    console.log(
      "Calificaste la película como Muy Buena. ¡Nos alegra mucho que la hayas disfrutado!"
    );
    break;
  default:
    console.log("Ingresaste un valor inválido.");
}

// Agradecemos al usuario por su visita
console.log("Gracias por tu visita.");
