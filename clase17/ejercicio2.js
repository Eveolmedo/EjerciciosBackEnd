const lista = [22, 5, 12, 9, 1, 8, 6, 15, 3, 11, 7, 4, 10, 2, 13, 100];

const bubbleSort = (array) => {
  let n = array.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        // Intercambiar elementos
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
};

function busquedaBinaria(array, objetivo) {
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
}

// Ordenar la lista usando bubble sort
const listaOrdenada = bubbleSort(lista);
console.log("Lista ordenada:", listaOrdenada);

// Números a buscar
const numeros = [12, 5, 22, 100];

numeros.forEach((numero) => {
  const posicion = busquedaBinaria(listaOrdenada, numero);
  if (posicion !== -1) {
    console.log(
      `El número ${numero} está en la posición ${
        posicion + 1
      } en la lista ordenada.`
    );
  } else {
    console.log(`El número ${numero} no se encuentra en la lista.`);
  }
});
