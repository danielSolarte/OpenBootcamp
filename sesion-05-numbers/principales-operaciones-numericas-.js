// Principales operacion aritmeticas

let a = 3.5
let b = 4.8

// Suma (+)
console.log(a + b)

// Resta (-)
console.log(a - b)

// Multiplicacion (*)
console.log(a * b)

// Division (/)
console.log(a / b)


// Representacion de los numeros en cadenas de texto
console.log(typeof a) // => Resultado: number // -> typeof a // -> Devuelve el tipo de dato de la variable (a)
let a_s = a.toString(); // => Resultado: string // -> a.toString() // -> Representa el valor de la variable en cadena de texto

console.log(a_s)
console.log(typeof a_s)


// Redondeo de numeros decimales
let c = 3.3
let d = c * 3

console.log(d)


// .toFixed(x) -> Permite limitar la cantidad de decimales que se desea manejar. Para redondear hacia arriba solo se pone la variable y el toFixed() asi: x.toFixed()
//             -> Esta funcion tiene particularidad y es que devuelve el resultado como string (Cadeba de texto)
console.log(d.toFixed(4)) // => Resultado: 9.9000
console.log(d.toFixed(2)) // => Resultado: 9.90
console.log(typeof d.toFixed(2)) // => Resultado: string

let e = 1839.1232456789
let f = 2213556153215

console.log(e.toFixed(2)) // => Resultado: 1839.12
console.log(f.toFixed(2)) // => Resultado: 2213556153215.00


// .toPresicion(x) -> Permite limitar la cantidad de cifras significativas que se desea manejar. (Cifra significativa: Significa numeros más a la derecha)
//                 -> Al igual que .toFixed(x) devuelve el resultado como string (Cadena de texto)
console.log(e.toPrecision(7)) // => Resultado: 1839.123
console.log(f.toPrecision(7)) // => Resultado: 2.213556e+12 // -> Devuelve las 7 cifras significativas antes del e+12

console.log(typeof f.toPrecision(7))