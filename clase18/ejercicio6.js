const marcasDeAutos = ["Ford ", "Tesla", "Chevrolet", "  Audi ", "Ford", "BMW"];

const gestionarAutos = (array) => {
  // 1. Quitar los espacios en blanco alrededor de cada marca
  const marcasSinEspacios = array.map((marca) => marca.trim());
  console.log("Marcas después de quitar espacios:", marcasSinEspacios);

  // 2. Verificar si existe la marca "Tesla"
  const existeTesla = marcasSinEspacios.includes("Tesla");
  console.log('¿Existe la marca "Tesla"?', existeTesla);

  // 3. Reemplazar todas las marcas "Ford" por "BMW"
  const marcasReemplazadas = marcasSinEspacios.map((marca) =>
    marca === "Ford" ? "BMW" : marca
  );
  console.log(
    'Marcas después de reemplazar "Ford" por "BMW":',
    marcasReemplazadas
  );

  // 4. Encontrar el índice de la marca "Chevrolet"
  const indiceChevrolet = marcasReemplazadas.indexOf("Chevrolet");
  console.log('Índice de la marca "Chevrolet":', indiceChevrolet);

  // 5. Devolver una cadena de marcas en orden alfabético separadas por puntos
  const marcasOrdenadas = marcasReemplazadas.sort().join(". ");
  return marcasOrdenadas;
};

const resultado = gestionarAutos(marcasDeAutos);
console.log("Marcas en orden alfabético separadas por puntos:", resultado);
