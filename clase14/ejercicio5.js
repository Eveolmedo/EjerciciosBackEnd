const prompt = require("prompt-sync")();

// 1. Inicializar un array vacío para almacenar las flores favoritas
const floresFavoritas = [];

// 2. Preguntar al usuario por sus tres flores favoritas y agregar cada una al array
for (let i = 1; i <= 3; i++) {
  let flor = prompt(`Ingrese la flor favorita #${i}: `);
  floresFavoritas.push(flor);
}

// 3. Preguntar al usuario por una flor específica
const florEspecifica = prompt(
  "Ingrese el nombre de una flor para verificar si es una de sus favoritas: "
);

// Verificar si la flor específica está en el array de flores favoritas
if (floresFavoritas.includes(florEspecifica)) {
  // Contar cuántas veces la flor específica aparece en el array
  let cantidad = 0;
  for (let i = 0; i < floresFavoritas.length; i++) {
    if (floresFavoritas[i] === florEspecifica) {
      cantidad++;
    }
  }

  // Mostrar por consola cuántas veces se menciona la flor
  console.log(
    `La flor "${florEspecifica}" está entre sus favoritas y se menciona ${cantidad} ${
      cantidad > 1 ? "veces" : "vez"
    }.`
  );
} else {
  // Mostrar mensaje si la flor específica no está en el array
  console.log(`La flor "${florEspecifica}" no está entre sus favoritas.`);
}
