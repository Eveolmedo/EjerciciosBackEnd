// Mostrar los 10 números siguientes a un valor dado:
const mostrarSiguientes = (valor) => {
  for (let i = valor + 1; i <= valor + 10; i++) {
    console.log(i);
  }
};

mostrarSiguientes(5); // Muestra números del 6 al 15

// Imprimir los números entre 5 y 20, saltando de tres en tres:

const imprimirSaltando = () => {
  for (let i = 5; i <= 20; i += 3) {
    console.log(i);
  }
};

imprimirSaltando();

// Mostrar la sumatoria de todos los números entre 0 y 100:

const sumarNumeros = () => {
  let suma = 0;
  for (let i = 0; i <= 100; i++) {
    suma += i;
  }
  console.log("Sumatoria:", suma);
};

sumarNumeros();

// Mostrar el factorial de un número entero positivo:

const calcularFactorial = (num) => {
  if (num < 0) return "Número negativo no tiene factorial";
  let factorial = 1;
  for (let i = 1; i <= num; i++) {
    factorial *= i;
  }
  return factorial;
};

console.log("Factorial de 5:", calcularFactorial(5)); // 120

// Mostrar todos los números de la secuencia de Fibonacci hasta un valor dado:

const fibonacci = (max) => {
  let a = 0,
    b = 1;
  while (a <= max) {
    console.log(a);
    [a, b] = [b, a + b];
  }
};

fibonacci(20); // Muestra la secuencia de Fibonacci hasta 20

// 6. Contar la cantidad de vocales en un string:

const contarVocales = (str) => {
  const vocales = "aeiou";
  let contador = 0;
  for (let char of str.toLowerCase()) {
    if (vocales.includes(char)) {
      contador++;
    }
  }
  return contador;
};

console.log("Cantidad de vocales:", contarVocales("Hola Mundo")); // 4

// 7. Devolver una lista invertida:

const invertirLista = (lista) => {
  const listaInvertida = [];
  for (let i = lista.length - 1; i >= 0; i--) {
    listaInvertida.push(lista[i]);
  }
  return listaInvertida;
};

console.log(invertirLista([1, 2, 3, 4])); // [4, 3, 2, 1]

// 8. Escribir una pirámide del 1 al 30:

const imprimirPiramide = () => {
  for (let i = 1; i <= 30; i++) {
    console.log(String(i).repeat(i));
  }
};

imprimirPiramide();

// 9. Imprimir todos los dígitos decimales del 0 al 9 usando un ciclo for

const imprimirDigitos = () => {
  for (let i = 0; i <= 9; i++) {
    console.log(i);
  }
};

// Ejemplo de uso
imprimirDigitos();

// 10. Convertir un string en minúsculas a mayúsculas:

const convertirAMayusculas = (str) => {
  return str.toUpperCase();
};

console.log(convertirAMayusculas("hola mundo")); // 'HOLA MUNDO'

// 11. Determinar el tipo de dato de un parámetro:

const tipoDeDato = (param) => {
  return typeof param;
};

console.log(tipoDeDato(123));
console.log(tipoDeDato("texto"));
console.log(tipoDeDato(true));
console.log(tipoDeDato([]));
console.log(tipoDeDato({}));

// 12. Calcular la circunferencia de un círculo dado su radio:

const calcularCircunferencia = (radio) => {
  const pi = Math.PI;
  return 2 * pi * radio;
};

console.log("Circunferencia con radio 5:", calcularCircunferencia(5));
