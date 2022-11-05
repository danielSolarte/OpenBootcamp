// Listas, array o arreglo

const lista = [1, "hola", true, undefined, null]
const lista2 = new Array(2, "hola", true, undefined, null);
const lista3 = new Array(3);

lista3[0] = "Soy el primer elemento, index 0";

const lista4 = [lista, lista2, lista3];

console.log(lista);
console.log(lista2);
console.log(lista3);
console.log(lista4);

// Objetos

const movil = {
    altura: 10,
    anchura: 5,
    marca: "Xiaomi",
    isWhite: false,
    contactos: ["Daniel", "Sofia", "Auron"],
    tarjeta: {
        marca: "Sandisk",
        almacenamiento: 32,
    },
    "altura-tarjeta": 4
}

// Se pueden agregar mas atributos al objeto, por fuera de su estructura

movil.anyo = 2022;
movil.marca = "Samsung";

console.log(movil.marca);

// Fechas
// Librerias de apoyo Moment.js

const ahora = new Date();
console.log(ahora);

const fecha_milis = new Date(10); // Utilizando los milisegundos
console.log(fecha_milis)

const fecha_cadena = new Date("march 25 2020");
console.log(fecha_cadena);

const fecha_valores = new Date(2022, 0, 15);
console.log(fecha_valores);

const dia = ahora.getDate()
const mes = ahora.getMonth() + 1 // El +1 es para entenderlo como: Enero = Mes 1, Febrero = Mes 2, etc. Esto porque los meses estan dentro de una lista,
                                // por lo tanto Enero seria la posicion [0], Febrero la posicion 1 [1], etc.

const anyo = ahora.getFullYear()

console.log(dia, mes, anyo);
