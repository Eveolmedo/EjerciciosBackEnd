const backEnd = (param1, param2) => {
  // Iterar del 1 al 100
  for (let i = 1; i <= 100; i++) {
    // Verificar si i es múltiplo de ambos parámetros
    if (i % param1 === 0 && i % param2 === 0) {
      console.log("Back End");
    }
    // Verificar si i es múltiplo del primer parámetro
    else if (i % param1 === 0) {
      console.log("Back");
    }
    // Verificar si i es múltiplo del segundo parámetro
    else if (i % param2 === 0) {
      console.log("End");
    }
    // Si no es múltiplo de ninguno, imprimir el número
    else {
      console.log(i);
    }
  }
};

backEnd(3, 5);
