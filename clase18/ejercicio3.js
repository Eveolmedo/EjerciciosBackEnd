let productos = [
  { nombre: "Alfajores", precio: 30 },
  { nombre: "Chocolates", precio: 50 },
  { nombre: "Chupetines", precio: 70 },
  { nombre: "Caramelos", precio: 20 },
  { nombre: "Bombones", precio: 20 },
];

function gestionarProductos(array) {
  // 1. Añadir un nuevo producto al array
  array.push({ nombre: "Galletas", precio: 40 });
  console.log("Después de añadir un nuevo producto:", array);

  // 2. Eliminar el último producto del array
  const ultimoProductoEliminado = array.pop();
  console.log("Después de eliminar el último producto:", array);
  console.log("Último producto eliminado:", ultimoProductoEliminado);

  // 3. Encontrar el índice de un producto específico
  const indiceProducto = array.findIndex(
    (producto) => producto.nombre === "Chupetines"
  );
  console.log("Índice del Producto 'Chupetines':", indiceProducto);

  // 4. Verificar si existe un producto con precio mayor a 50
  const existeProductoMayorA50 = array.some((producto) => producto.precio > 50);
  console.log(
    "¿Existe un producto con precio mayor a 50?:",
    existeProductoMayorA50
  );

  // 5. Devolver una cadena de nombres de productos separados por comas
  const nombresDeProductos = array
    .map((producto) => producto.nombre)
    .join(", ");
  return nombresDeProductos;
}

const nombresDeProductos = gestionarProductos(productos);
console.log("Nombres de productos:", nombresDeProductos);
