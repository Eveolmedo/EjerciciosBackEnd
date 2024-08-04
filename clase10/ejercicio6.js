let animales = ["perro", "gato", "loro", "serpiente", "elefante", "aguila"];

let clasificacion = [];

for (let i = 0; i < animales.length; i++) {
  clasificacion[i] =
    animales[i] === "perro" ||
    animales[i] === "gato" ||
    animales[i] === "elefante"
      ? "mamífero"
      : animales[i] === "loro" || animales[i] === "aguila"
      ? "ave"
      : animales[i] === "serpiente"
      ? "reptil"
      : "desconocido";
}

console.log(clasificacion);
