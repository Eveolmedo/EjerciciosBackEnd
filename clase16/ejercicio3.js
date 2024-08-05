let vueltas = [5, 8, 12, 3, 22];

// Calcular el total de vueltas usando reduce
let totalVueltas = vueltas.reduce((total, vuelta) => total + vuelta, 0);
console.log("Total de vueltas inicial:", totalVueltas);

// Añadir una vuelta al principio del array
vueltas.unshift(7);
console.log("Vueltas después de añadir 7 al principio:", vueltas);

// Eliminar la última vuelta del array
let ultimaVuelta = vueltas.pop();
console.log("Vueltas después de eliminar la última vuelta:", vueltas);
console.log("Última vuelta eliminada:", ultimaVuelta);

// Verificar si la vuelta 10 está en el array y agregarla al final si no está presente
if (!vueltas.includes(10)) {
  vueltas.push(10);
}
console.log("Vueltas después de verificar/agregar la vuelta 10:", vueltas);

// Eliminar la primera vuelta del array
let primeraVuelta = vueltas.shift();
console.log("Vueltas después de eliminar la primera vuelta:", vueltas);
console.log("Primera vuelta eliminada:", primeraVuelta);

// Verificar si la vuelta 15 está en el array y agregarla al principio si no está presente
if (!vueltas.includes(15)) {
  vueltas.unshift(15);
}
console.log("Vueltas después de verificar/agregar la vuelta 15:", vueltas);

// Calcular el nuevo total de vueltas usando reduce
totalVueltas = vueltas.reduce((total, vuelta) => total + vuelta, 0);
console.log("Nuevo total de vueltas:", totalVueltas);
