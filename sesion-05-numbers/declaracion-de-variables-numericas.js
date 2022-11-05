// Sesion 05 - Numbers
// Declaracion de variables numericas (Enteros y decimales)

let a = 5

console.log(a)

let b = 0.1

console.log(b)

// Precision
let c = 0.2

console.log(b + c) // => Resultado: 0.30000000000000004 // -> Esto pasa por el manejo que le da JavaScript a las variables

console.log(Math.round((b + c) * 100) / 100) // => Resultado: 0.3 // -> Para solucionar el "problema" anterior una opcion es hacerlo de esta manera


