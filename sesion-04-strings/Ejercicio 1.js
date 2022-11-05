// EJERCICIO 1

let nombre = "Daniel Felipe"
let apellido = "Solarte Marín"
let estudiante = nombre.concat(" ", apellido)
let estudianteMayus = estudiante.toUpperCase()
let estudianteMinus = estudiante.toLowerCase()
let cantidadEst = estudiante.length
let primerLetra = estudiante.charAt(0)
let ultimaLetra = estudiante[estudiante.length - 1]
let est_trim = estudiante.replace(/ /g, "") // => Respuesta: DanielFelipeSolarteMarín // -> Quita todos los espacios de la cadena de texto.
let estaContenido = estudiante.includes(`${nombre}`)
