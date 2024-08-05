/* Integrador de todos los métodos:
Tenemos un array en una variable datos con números al azar, que pueden ser tanto positivos como negativos
o Queremos eliminar todos los números negativos
o Con los números restantes, obtener el doble de cada uno
o Finalmente, obtener la suma de todos los números que obtuvimos */

const datos = [2, -4, 6, 0, 5, -1];

let total = 0;

const sinNegativos = datos.filter((num) => num >= 0);

console.log(sinNegativos);

//Otra forma de eliminar negativos
//nombre.splice(posicion, cantidad a eliminar)
for (i = 0; i < datos.length; i++) {
  if (datos[i] < 0) {
    datos.splice(i, 1);
  }
}
console.log(datos);

const dobles = sinNegativos.map((num) => num * 2);

console.log(dobles);

total = dobles.reduce((acum, num) => acum + num, 0);

console.log(total);
