// Definición de los objetos libro
const libro1 = {
  titulo: "Cien años de soledad",
  autor: "Gabriel García Márquez",
  anioPublicacion: 1967,
};

const libro2 = {
  titulo: "Don Quijote de la Mancha",
  autor: "Miguel de Cervantes",
  anioPublicacion: 1605,
};

const mostrarLibro = (libros) => {
  for (let i = 0; i < libros.length; i++) {
    const libro = libros[i];
    console.log(`Título: ${libro.titulo}`);
    console.log(`Autor: ${libro.autor}`);
    console.log(`Año de Publicación: ${libro.anioPublicacion}`);
    console.log(""); // Línea en blanco para separar libros
  }
};

// Arreglo de libros
const libros = [libro1, libro2];

// Mostrar la información de los libros
mostrarLibro(libros);
