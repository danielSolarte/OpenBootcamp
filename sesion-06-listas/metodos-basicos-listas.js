// Como trabajar con listas (arrays, arreglos, vectores...)

let var1 = 45 // => Cualquier tipo de dato
let array = [1, "hola", false, { id: 5 }, null, undefined, var1] // => Se pueden conformar por diferentes tipos de datos en el mismo array

console.log(array)

// Acceder a los valores de un array a traves de su posicion
// => array[indice] -> 0, 1, 2, 3, 4, 5, ....

console.log(array[0])
console.log(array[1])
console.log(array[2])
console.log(array[3])

// Metodos para agregar valores al array
// .push() .unshift() // => Mutan el valor de nuestro array. (Es decir que modifican el valor del array, pues agrega elementos)

// => .push() -> Agrega valores al final del array
array.push("final", 45, 100, false) // => Se pueden agregar varios elementos al mismo tiempo
console.log(array)

// => .unshift()  -> Agrega valores al inicio del array
array.unshift("inicio", 87, 49) // => Se pueden agregar varios elementos al mismo tiempo
console.log(array)

// Metodos para eliminar valores de nuestro array
// .pop() .shift() // => Mutan el valor de nuestro array.

const array2 = [1, 3, "hola", false]

// .pop() -> Elimina varoles al final
array2.pop()
console.log(array2)

// .shift() -> Elimina valores al inicio
array2.shift()
console.log(array2)

// Metodo para eliminar, modificar o añadir valores al array
// .splice(x, y, z) -> x: Indice de inicio, y: Cantidad de elementos a eliminar, z: Valores a agregar
const array3 = [1, 2, 3, 4, 5, 6]

// Eliminar valores .splice(Indice, Cantidad de valores a eliminar)

array3.splice(2, 0) // -> Indice de inicio: 2, cantidad de elementos a eliminar: 0
console.log(array3) // => Resultado: [ 1, 2, 3, 4, 5, 6 ] -> No se modifica

array3.splice(2, 1) // -> Indice de inicio: 2, cantidad de elementos a eliminar: 1
console.log(array3) // => Resultado: [ 1, 2, 4, 5, 6 ] -> Se elimina el elemento que estaba en el indice de inicio.

array3.splice(2, 2) // -> Indice de inicio: 2, cantidad de elementos a eliminar: 2
console.log(array3) // => Resultado: [ 1, 2, 6 ] -> Se elimina el elemento que estaba en el indice de inicio y el siguiente

// Añadir valores .splice(Indice, 0, Valores a añadir) -> El 0 indica que vamos a AGREGAR elementos.

array3.splice(2, 0, "hola", 3) // => Indice de inicio: 2, cantidad de elementos a eliminar: 0, Elementos a agregar: ("hola", 3)
console.log(array3) // => Resultado: [ 1, 2, 'hola', 3, 6 ] -> Agrega los elementos ("hola" y 3) en la posicion 2 en adelante.

array3.splice(2, 0, "bye") // => Indice de inicio: 2, cantidad de elementos a eliminar: 0, Elementos a agregar: ("bye")
console.log(array3) // => Resultado: [ 1, 2, 'bye', 'hola', 3, 6 ] -> Agrega el elemento ("bye") en la posicion 2.

// Modificar valores .splice(Indice, 1, Valor de reemplazo) -> El 1 indica que vamos a MODIFICAR o REEMPLAZAR un valor.
array3.splice(2, 1, 4) // => Indice de inicio: 2, cantidad de elementos a eliminar: 1, elementos a agregar: (3)
console.log(array3) // => Resultado: [ 1, 2, 4, 'hola', 3, 6 ] -> Modifica el elemento ("bye"), en la posicion 2 por el valor (4)

array3.splice(3, 1, false, true) // => Indice de inicio: 3, cantidad de elementos a eliminar: 1, Elementos a agregar: (false)
console.log(array3) // => Resultado: [ 1, 2, 4, false, true, 3, 6 ] -> Modifica el elemento ("hola"), en la posicion 3 por el valor: (false) y añade adicionalmente el valor (true)

