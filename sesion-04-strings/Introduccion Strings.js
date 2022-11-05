// SESION 4 - STRINGS (CADENAS DE CARACTERES)

let str_dbl = "Hola soy un texto con comillas dobles";
let str_sng = 'Hola soy un texto con comilla simple';

console.log(str_dbl);
console.log(str_sng);


let str_comillas = "El otro dia me dijo literalmente \"ve a sacar la basura\"";
let str_comillas_simples = 'El otro dia me dijo literalmente "ve a sacar la basura"';
let str_comillas_dobles = "El otro dia me dijo literalmente 've a sacar la basura'";

console.log(str_comillas)
console.log(str_comillas_dobles)
console.log(str_comillas_simples)

// COMILLAS INVERTIDAS (BACKTICKS) -> Permiten introducir variables dentro de la cadena de texto, muy util para la creacion de plantillas HTML

let str_backticks = `Hola esto es un string con backticks`;

console.log(str_backticks);

let nombre = "Daniel";
let saludo = `Hola, ${nombre} bienvenido` // -> EJEMPLO

console.log(saludo)

// Plantillas HTML

let plantilla = `
<html>
    <h1>Pagina web de ${nombre}</h1>
    <p>Este es un parrafo</p>
</html>`;

console.log(plantilla)

// Introduccion de variables HTML

let libros = ["Empieza por el por que", "El monje que vendio su Ferrari", "El poder de ahora"]