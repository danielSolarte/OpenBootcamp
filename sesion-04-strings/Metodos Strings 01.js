// Metodos mas utilizados con Strings

// Como obtener la longitud de un string
let str = "Hola soy un string";
console.log(str.length)

// Obtener partes de cadenas de caracteres
// slice() substring() substr()=> Deprecated

let slice_str = str.slice(5,10) // str.slice(i,k) => Posicion de inicio (i) y Posicion de finalizacion (k)
console.log(slice_str)

let substring_str = str.substring(5,10) // str.substring(i,k) => Posicion de inicio (i) y Posicion de finalizacion (k)
console.log(substring_str)

let substr_str = str.substr(5, 10) // str.substr(i,k) => Posicion de inicio (i) y cantidad de caracteres a mostrar a partir de la posicion de inicio (k)
console.log(substr_str)

// Reemplazar parte del contenido de una cadena de texto
let cadena = "Hola mi nombre es Daniel"
console.log(cadena)

// cadena.replace('palabra a reemplazar' , 'palabra de reemplazo')
console.log(cadena.replace('Daniel', 'Sofia')) 

let txt_largo = "Daniel ama mucho a Sofia y Sofia ama mucho a Daniel"
// txt_largo.replace('J','K')) => Solo reemplaza la primer palabra que coincida con la palabra a reemplazar (J)
console.log(txt_largo.replace('Daniel','Pepito'))

// Al utilizar la expresion regular /g (global), reemplaza todas las instancias
console.log(txt_largo.replace(/Sofia/g, 'Pepita'))
// txt_largo.replace(/sofia/g , 'Pepita') => /Palabra a reemplazar/g , 'Palabra de reemplazo'

