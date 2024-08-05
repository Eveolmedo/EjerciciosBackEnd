const librosDeJS = [
  "Javascript for Kids: A Playful Introduction to Programming",
  "Composing Software",
  "Eloquent JavaScript: A Modern Introduction to Programming",
  "JavaScript: The Good Parts",
  "Programming JavaScript Applications: Robust Web Architecture with Node, HTML5, and Moderns JS Libraries",
  "Effective JavaScript: 68 Specific Ways to Harness the Power of JavaScript",
  "JavaScript: The Definitive Guide",
  "You Dont Know JS",
  "JavaScript Allongé: The Six Edition",
];

let totalLibros = 0;
librosDeJS.forEach((libro, index) => {
  totalLibros = index + 1;
  console.log(totalLibros);
});

console.log("Mi lista de libros de JS tiene " + totalLibros + " libros.");
