// Array de modelos de autos
const modelosAutos = [
  "Toyota Camry",
  "Honda Civic",
  "Ford Focus",
  "Toyota Camry",
  "Honda Accord",
  "Ford Mustang",
  "Toyota Corolla",
  "Ford Focus",
  "Honda Civic",
  "Ford Mustang",
];

const ultimaAparicionModeloAuto = (modelo) => {
  // Encontrar la última posición del modelo en el array
  const ultimaPosicion = modelosAutos.lastIndexOf(modelo);

  // Verificar si el modelo se encuentra en el array
  if (ultimaPosicion !== -1) {
    // Imprimir la posición encontrada (índice + 1 para mostrar el número de posición)
    console.log(
      `El modelo "${modelo}" aparece por última vez en la posición ${
        ultimaPosicion + 1
      }.`
    );
  } else {
    // Imprimir mensaje si el modelo no está presente
    console.log(`El modelo "${modelo}" no está presente en el array.`);
  }
};

ultimaAparicionModeloAuto("Toyota Camry");
ultimaAparicionModeloAuto("Chevrolet Malibu");
