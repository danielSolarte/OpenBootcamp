// Metodos de cadenas de texto (Parte 3)
// https://regexr.com -> Pagina para practicar expresiones regulares

let txt_largo = "Tito no es un mono cualquiera. A Tito no le gusta trepar por los arboles y odia comer platanos. El prefiere pasear por el bosque, oler las flores y recoger las nueces que se caen de los arboles."

// Como devolver todas las instancias que coincidan con una palabra especificada dentro de una cadena de texto?

console.log(txt_largo.match(/no/g)) // => Respuesta: ['no', 'no', 'no' ,'no'] // -> txt_largo.match(/no/g) // -> Devuelve un array con todas las instancias que se coincidan con la palabra especificada. => variable.match(/Palabra Especificada/g)

// Como saber si una palabra se encuentra en una cadena de texto?

console.log(txt_largo.includes("prefiere")) // => Respuesta: true // -> txt_largo.includes("prefiere") // -> Devuelve TRUE o FALSE dependiendo si la palabra especificada se encuentra en la cadena de texto.

// Como saber si un texto empieza con una palabra?

console.log(txt_largo.startsWith("Tito no es un mono cualquiera")) // => Respuesta: true // -> txt_largo.startsWith("Palabra especificada") // -> Devuelve TRUE o FALSE dependiendo si la cadena texto comienza con la palabra o cadena de texto especificada.

// Como saber si un texto termina con una palabra?

console.log(txt_largo.endsWith("arboles.")) // => Respuesta: true // -> txt_largo.endsWith("Palabra especificada") // -> Devuelve TRUE o FALSE dependiendo si la cadena texto termina con la palabra o cadena de texto especificada.