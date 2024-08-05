let listaDeSuperMercado = ["Manzanas", "Leche", "Pan", "Cereales", "Huevos"];

// Agrega el artículo 'Papas' al final de la lista utilizando el método push.
listaDeSuperMercado.push("Papas");
console.log("Lista después de agregar Papas:", listaDeSuperMercado);

// Elimina el primer artículo de la lista utilizando el método shift.
listaDeSuperMercado.shift();
console.log(
  "Lista después de eliminar el primer artículo:",
  listaDeSuperMercado
);

// Utiliza el método forEach para recorrer el arreglo listaDeSuperMercado y mostrar cada ítem por consola.
console.log("Lista de supermercado:");
listaDeSuperMercado.forEach((item, index) => {
  console.log(`${index + 1}. ${item}`);
});

// Busca la posición del artículo 'Cereales' utilizando el método lastIndexOf y muestra su posición en la lista.
const posicionCereales = listaDeSuperMercado.lastIndexOf("Cereales");

if (posicionCereales !== -1) {
  console.log(
    `El artículo 'Cereales' está en la posición ${
      posicionCereales + 1
    } de la lista.`
  );
} else {
  console.log("El artículo 'Cereales' no se encontró en la lista.");
}
