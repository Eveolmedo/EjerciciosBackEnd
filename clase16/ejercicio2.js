/* Ejercicio 2: filter() “Alumnos”
Necesitamos enviarle un diploma a los alumnos que están aprobados y un e-mail a los alumnos desaprobados para acordar un recuperatorio. 
Por lo tanto, necesitamos dos listas: una lista que almacene todos los aprobados y otra los desaprobados. Deberemos guardarlos en las variables aprobados y desaprobados respectivamente.
Además de hacer esto, deberemos realizar las siguientes operaciones: */

const alumnos = [
  { nombre: "Juan", nota: 7 },
  { nombre: "Maria", nota: 4 },
  { nombre: "Pedro", nota: 8 },
  { nombre: "Ana", nota: 5 },
  { nombre: "Luis", nota: 3 },
  { nombre: "Lucia", nota: 9 },
];

// Filtra los estudiantes en dos listas: aprobados y desaprobados.
const aprobados = alumnos.filter((alumno) => alumno.nota >= 6);
const desaprobados = alumnos.filter((alumno) => alumno.nota < 6);

// Manipula la lista de aprobados agregando un estudiante al inicio y otro al final.
aprobados.unshift({ nombre: "Carlos", nota: 10 });
aprobados.push({ nombre: "Evelyn", nota: 6 });

// Manipula la lista de desaprobados eliminando al primero y al último estudiante.
desaprobados.shift();
desaprobados.pop();

// Utiliza map junto con indexOf para buscar un estudiante específico en la lista de aprobados y muestra su índice si está presente.
const nombreBuscado = "Pedro";
const indicesAprobados = aprobados.map((alumno) => alumno.nombre);
const indice = indicesAprobados.indexOf(nombreBuscado);
if (indice !== -1) {
  console.log(
    `El estudiante ${nombreBuscado} está en la lista de aprobados en la posición ${indice}.`
  );
} else {
  console.log(
    `El estudiante ${nombreBuscado} no está en la lista de aprobados.`
  );
}

// Utiliza includes para verificar si un estudiante está en la lista de desaprobados y muestra un mensaje indicando su presencia.
const nombreBuscadoDesaprobado = "Ana";
const nombresDesaprobados = desaprobados.map((alumno) => alumno.nombre);
const estaDesaprobado = nombresDesaprobados.includes(nombreBuscadoDesaprobado);
if (estaDesaprobado) {
  console.log(
    `El estudiante ${nombreBuscadoDesaprobado} está en la lista de desaprobados.`
  );
} else {
  console.log(
    `El estudiante ${nombreBuscadoDesaprobado} no está en la lista de desaprobados.`
  );
}

// Muestra las listas de aprobados y desaprobados actualizadas después de todas las operaciones.
console.log("Lista de aprobados actualizada:", aprobados);
console.log("Lista de desaprobados actualizada:", desaprobados);
