const flores = [
  "  Rosa  ",
  "Tulipán",
  "Margarita",
  "  Orquídea  ",
  "Lirio",
  "Orquídea",
  "Violeta",
];

const gestionarFloreria = (array) => {
  // 1. Quitar los espacios en blanco alrededor de cada flor
  const floresSinEspacios = array.map((flor) => flor.trim());
  console.log("Flores después de quitar espacios:", floresSinEspacios);

  // 2. Verificar si existe la flor "Margarita" y agregar "Azucena" al final si está presente
  if (floresSinEspacios.includes("Margarita")) {
    floresSinEspacios.push("Azucena");
    console.log('Flores después de agregar "Azucena":', floresSinEspacios);
  }

  // 3. Reemplazar todas las flores "Orquídea" por "Clavel"
  const floresReemplazadas = floresSinEspacios.map((flor) =>
    flor === "Orquídea" ? "Clavel" : flor
  );
  console.log(
    'Flores después de reemplazar "Orquídea" por "Clavel":',
    floresReemplazadas
  );

  // 4. Encontrar el índice de la flor "Girasol" y, si no está presente, agregar "Girasol" al inicio de la lista
  const indiceGirasol = floresReemplazadas.indexOf("Girasol");
  if (indiceGirasol === -1) {
    floresReemplazadas.unshift("Girasol");
    console.log(
      'Flores después de agregar "Girasol" al inicio:',
      floresReemplazadas
    );
  } else {
    console.log('Índice de la flor "Girasol":', indiceGirasol);
  }

  // 5. Devolver una cadena de flores en orden alfabético separadas por puntos
  const floresOrdenadas = floresReemplazadas.sort().join(". ");
  return floresOrdenadas;
};

const resultado = gestionarFloreria(flores);
console.log("Flores en orden alfabético separadas por puntos:", resultado);
