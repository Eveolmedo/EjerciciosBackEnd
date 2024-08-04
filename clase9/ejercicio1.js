/* Ejercicio 1: Switch
El objetivo de este ejercicio es imprimir en consola un texto que irá variando según el día que contenga la variable dia. Para esto, ya presentamos un código hecho con if/else que tendremos que modificar y convertirlo a un switch, manteniendo el mismo resultado. */

let dia = "lunes";

switch (dia) {
  case "lunes":
    console.log("Hoy es lunes, inicio de la semana.");
    break;
  case "martes":
    console.log("Hoy es martes, segundo día de la semana.");
    break;
  case "miércoles":
    console.log("Hoy es miércoles, mitad de semana.");
    break;
  case "jueves":
    console.log("Hoy es jueves, casi terminamos la semana.");
    break;
  case "viernes":
    console.log("Hoy es viernes, fin de semana cercano.");
    break;
  case "sábado":
    console.log("Hoy es sábado, día de descanso.");
    break;
  case "domingo":
    console.log("Hoy es domingo, fin de la semana.");
    break;
  default:
    console.log("Día no válido.");
}
