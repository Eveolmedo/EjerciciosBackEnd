const transformarYAnalizarNombres = (input) => {
  // 1. Separar la cadena de nombres en un array y quitar los espacios en blanco alrededor de cada nombre
  let nombres = input.split(",").map((nombre) => nombre.trim());
  console.log("Nombres después de quitar espacios:", nombres);

  // 2. Verificar si existe el nombre "Juan"
  const existeJuan = nombres.includes("Juan");
  console.log('¿Existe el nombre "Juan"?', existeJuan);

  // 3. Reemplazar todos los nombres "María" por "Ana"
  nombres = nombres.map((nombre) => (nombre === "María" ? "Ana" : nombre));
  console.log('Nombres después de reemplazar "María" por "Ana":', nombres);

  // 4. Encontrar el índice del nombre "Pedro"
  const indicePedro = nombres.indexOf("Pedro");
  console.log('Índice del nombre "Pedro":', indicePedro);

  // 5. Devolver una cadena de nombres en orden alfabético separados por puntos
  nombres.sort(); // Ordenar los nombres alfabéticamente
  const nombresOrdenados = nombres.join(". ");
  return nombresOrdenados;
};

// Ejemplo de uso
const entrada = "Julian, Maria, Malena, Andrea, Pablo, Pedro";
const resultado = transformarYAnalizarNombres(entrada);
console.log(
  "Cadena de nombres en orden alfabético separados por puntos:",
  resultado
);
