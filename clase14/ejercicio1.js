const entrenarHoras = (deportista, horas) => {
  // Validar que el número de horas sea un valor positivo
  if (horas <= 0) {
    console.log("Introduce un número de horas válido para entrenar.");
    return;
  }

  // Restar energía y aumentar experiencia
  deportista.energia -= horas * 5;
  deportista.experiencia += horas * 2;

  // Asegurarse de que la energía no sea negativa
  if (deportista.energia < 0) {
    deportista.energia = 0;
    console.log("¡Energía agotada! El deportista no puede entrenar más.");
  }

  // Mostrar el estado actualizado del deportista
  console.log(`Después de entrenar ${horas} horas:`);
  console.log(`Energía: ${deportista.energia}`);
  console.log(`Experiencia: ${deportista.experiencia}`);
};

// Definición del objeto deportista
const deportista = {
  nombre: "Juan Pérez",
  energia: 100,
  experiencia: 0,
};

// Ejemplo de uso de la función entrenarHoras
entrenarHoras(deportista, 5); // Entrena durante 5 horas
entrenarHoras(deportista, 3); // Entrena durante 3 horas
