// Iterar los valores de una lista
const array = ["Hola", 2, 5, 90, false, undefined]


// FORMA ANTIGUA Y POCO EFICIENTE
for (let i = 0; i < array.length; i++) {
    console.log(array[i])
}

// FORMA ES6 (MAS EFICIENTE) => .forEach()
let suma = 0
const arrayNums = [3, 6, 2, 77, 2, 3, 93, 19]
arrayNums.forEach(valor => {
    suma += valor
    console.log(valor) // Resultado: 3, 6, 2, 77, 2, 3, 93, 19
})

console.log(suma) // Resultado: 205

// Busqueda de un valor dentro de una lista => .find()

// Quiero encontrar el elemento 90
const variable = array.find(valor => {
    if (valor === 90) {
        return true
    }
})

console.log(variable) // Resultado: 90

const listaObjetos = [
    { nombre: "Leire", edad: 35 },
    { nombre: "Daniel", edad: 23 },
    { nombre: "Miguel", edad: 28 },
    { nombre: "Lucia", edad: 3 },
    { nombre: "Sofia", edad: 19 }
]

const objeto1 = listaObjetos.find(o => {
    if (o.nombre === "Miguel") {
        return true
    }
})

console.log(objeto1.edad) // Resultado: 28


// FORMA SIMPLIFICADA
const objeto2 = listaObjetos.find(o => {
    return o.nombre === "Miguel"
})

console.log(objeto2.edad) // Resultado: 28


// FORMA AUN MAS SIMPLIFICADA (Solo aplicable si lo unico que se va a devolver es un return)
const objeto3 = listaObjetos.find(o => o.nombre === "Miguel")

console.log(objeto3.edad) // Resultado: 28


// FORMA POR DECONSTRUCCION DE OBJETOS
const { edad } = listaObjetos.find(o => o.nombre === "Sofia") // => const { Propiedad del objeto que deseo obtener } = listaObjetos.find(X => X.criterio de busqueda === "Valor de busqueda")
console.log(edad) // Resultado: 19