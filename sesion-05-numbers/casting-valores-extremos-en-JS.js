// Operador .valueOf() - Obtener valores numericos a partir de literales
let a = 2;
let b = new Number(3); // => Rara vez se utiliza

console.log(a);
console.log(b);
console.log(a + b);
console.log(a.valueOf() + b.valueOf());

console.log(b.valueOf());

let str = new String("Hola soy un string");
console.log(str);
console.log(str.valueOf());

// NaN (Not a Number) - Infinity
let n = Number("adios");
console.log(n);
console.log(isNaN(n)) // => Resultado: true // isNaN(n) // -> Devuelve true si la variable no es un numero y devuelve falso en caso contrario.

let numerador = 19;
let divisor = 0;

console.log(numerador / divisor) // => Resultado: Infinity // -> Cuando se esta dividiendo por valor 0, se muestra como Infinity.

let divisor_2 = null;
console.log(numerador / divisor_2) // => Resultado: Infinity


// Como convertir los string a valores numericos con Number, parseInt y parseFloat
let numero = '5.89'
let num2 = 17.2

console.log(typeof numero)
console.log(numero + num2) // => Resultado: 5.8917.2 // -> ERROR pues esta concatenando, no sumando

console.log(Number(numero) + num2) // Resultado: 23.09 // -> Suma correcta


console.log(parseInt(numero)) // => Resultado: 5
console.log(parseFloat(numero)) // => Resultado: 5.89

let num3 = 4;
console.log(parseInt(num3))
console.log(parseFloat(num3))


// Numeros hexadecimales (Base 16)
let numHex = '0x3a5b7';
console.log(parseInt(numHex, 16))


// Obtener los valores maximos y minimo en JavaScript
let min_precision = Number.EPSILON; // -> Devuelve el valor minimo que hay entre un numero y el siguiente en JavaScript
let min_valor_JS = Number.MIN_VALUE; // -> Number.MIN_VALUE // -> Devuelve el valor minimo con el que podemos trabajar en JavaScript
let max_valor_HS = Number.MAX_VALUE; // -> Number.MAX_VALUE // -> Devuelve el valor numero con el que podemos trabajar en JavaScript

console.log(min_precision) // => Resultado: 2.220446049250313e-16
console.log(min_valor_JS) // => Resultado: 5e-324
console.log(max_valor_HS) // => Resultado: 1.7976931348623157e+308