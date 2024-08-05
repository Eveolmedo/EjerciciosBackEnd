const frases = [
  "El servicio aqui es malo",
  "El clima es MALO hoy",
  "Este libro es muy MALO",
];

const procesarFrases = (array) => {
  return array.map((frase) => {
    // 1. Convertir la frase a minúsculas
    const fraseMinuscula = frase.toLowerCase();

    // 2. Dividir la frase en palabras
    const palabras = fraseMinuscula.split(" ");

    // 3. Reemplazar las palabras "malo" por "bueno"
    const palabrasReemplazadas = palabras.map((palabra) =>
      palabra === "malo" ? "bueno" : palabra
    );

    // 4. Combinar las palabras en una nueva cadena separada por espacios
    return palabrasReemplazadas.join(" ");
  });
};

const frasesModificadas = procesarFrases(frases);
console.log("Frases modificadas:", frasesModificadas);
