const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const busquedaBinaria = (array, objetivo) => {
  let inicio = 0;
  let fin = array.length - 1;

  while (inicio <= fin) {
    let medio = Math.floor((inicio + fin) / 2);

    if (array[medio] === objetivo) {
      return medio;
    } else if (array[medio] < objetivo) {
      inicio = medio + 1;
    } else {
      fin = medio - 1;
    }
  }

  return -1; // Retorna -1 si el objetivo no se encuentra en el array
};

const numeros = [1, 5, 6, 9, 11];

numeros.forEach((numero) => {
  const posicion = busquedaBinaria(list, numero);
  if (posicion !== -1) {
    console.log(`El número ${numero} está en la posición ${posicion + 1}.`);
  } else {
    console.log(`El número ${numero} no se encuentra en la lista.`);
  }
});
