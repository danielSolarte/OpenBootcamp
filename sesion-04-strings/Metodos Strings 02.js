// Metodos de cadenas de texto (Parte 2)

let input = "eScorPio"
let db = "escorpio"

// toLowerCase() -> Convertir todos los caracteres en minusculas
// toUpperCase() -> Convertir todos los caracteres en mayusculas

console.log(input.toLowerCase())
console.log(db.toUpperCase())

// Formas de concatenar dos cadenas de caracteres
let str_1 = "Hola soy la primera cadena"
let str_2 = "Y yo soy la segunda cadena"

// FORMA 1
console.log(str_1.concat(" ", str_2))

// FORMA 2
console.log(str_1 + " " + str_2)

// FORMA 3
console.log(`${str_1} ${str_2}`)

// Eliminar los espacios al inicio y al final
let str_3 = "   Hola soy un string con espacios al final.    "
console.log(str_3.length)

// trim()
console.log(str_3.trim().length) // => Elimina todos los espacios del inicio y del final.
console.log(str_3.trimStart().length) // => Elimina los espacios del inicio.
console.log(str_3.trimEnd().length) // => Elimina los espacios del final.


// Obtener la letra que hay en cierta posicion
let str_4 = "Hola soy el string numero 4" // ["H", "o", "l", "a", " ", "s", "o", ......]

console.log(str_4.charAt(5))
console.log(str_4[5])

// Obtener la posicion de una palabra dentro de una cadena de caracteres
let str_5 = "Hola soy Daniel y me gustan las motocicletas. Mi nombre es Daniel y mi apellido Marin"

console.log(str_5.indexOf("Daniel")) // = Resultado: 9 => str_5.indexof("Daniel") Muestra la posicion donde inicia la primer letra de la palabra que  
                                        // especificamos. Si no se encuentra la palabra se devolvera el valor -1. Si hay mas instancias que coincidan 
                                        // seguira devolviendo la primera que encuentra.
console.log(str_5[9]) // => D

console.log(str_5.lastIndexOf("Daniel")) // = Resultado: 59 => str_5.lastIndexOf("Daniel") Muestra la posicion de la primer letra de la ultima
                                        // instancia que encuentra.