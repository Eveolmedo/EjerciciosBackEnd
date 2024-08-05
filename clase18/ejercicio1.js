/* Crea un objeto literal que represente un estudiante. El mismo debe tener las siguientes propiedades: nombre, edad y un array de notas (con 5 notas). */

let alumno = {
  nombre: "Evelyn",
  edad: 25,
  notas: [8, 6, 9, 7, 10],
};

// Luego, escribe la función “procesarEstudiante” que tendrá como objetivo realizar las siguientes tareas:

const procesarEstudiante = (alumno) => {
  // 1. Agregar una nueva nota al array de notas.
  alumno.notas.push(4);

  // 2. Eliminar la primera nota del array.
  alumno.notas.shift();

  // 3. Calcular el promedio de las notas restantes.
  let acum = 0;
  for (i = 0; i < alumno.notas.length; i++) {
    acum += alumno.notas[i];
  }
  let promedio = acum / alumno.notas.length;

  // 4. Convertir el nombre del estudiante a mayúsculas. Para esto investiga sobre el método “toUpperCase()”
  alumno.nombre = alumno.nombre.toUpperCase();

  // 5. Devuelver un objeto con el nombre en mayúsculas y el promedio de las notas. */
  alumno.promedio = promedio;

  return {
    nombre: alumno.nombre,
    promedio: promedio,
  };
};

console.log(procesarEstudiante(alumno));
