// Como unir dos listas .concat(lista2)

// .concat(lista2) -> No muta la lista (No modifica el valor de la lista)

const lista1 = ["hola", 2, false, null]
const lista2 = ["adios", 8, false, undefined]

console.log(lista1.concat(lista2)) // Resultado: [ 'hola', 2, false, null, 'adios', 8, false, undefined ]
console.log(lista1) // Resultado: [ 'hola', 2, false, null ] -> Como se puede apreciar no modifico el valor de la lista.

const lista3 = lista1.concat(lista2) // Resultado: [ 'hola', 2, false, null, 'adios', 8, false, undefined ]
console.log(lista3)

// Como unir dos listas con el FACTOR DE PROPAGACION
console.log(...lista3) // Resultado: hola 2 false null adios 8 false undefined //...lista3 // -> Devuelve los valores como "por separado"

const lista4 = [...lista1, ...lista2]
console.log(lista4) // Resultado: [ 'hola', 2, false, null, 'adios', 8, false, undefined ] -> Este metodo da el mismo resultado que utilizar el metodo .concat()

