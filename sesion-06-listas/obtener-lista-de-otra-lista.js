// Como obtener una lista a partir de otra .slice()
const array = ["hola", 1, 2, 3, true, null, "adios"]

// .slice() -> NO MODIFICA EL VALOR DEL ARRAY ORIGINAL 

// .slice(x) -> Devuelve todos los elementos a partir del indice que especifiquemos (x)
console.log(array.slice(3)) // Resultado: [ 3, true, null, 'adios' ]

// .slice(x, y) // -> Devuelve todos los elementos dentro de los indices especificados, es decir: [x, .... ,y-1]

const array2 = array.slice(1, 4)
console.log(array2) // Resultado: [ 1, 2, 3 ]