var variable; // VAR es global
let variableLet_; // LET es local, es decir solo afecta dentro del bloque que se declara sin importar si por fuera hay otra variable con el mismo nombre
                    // Declarar 2 variables con el mismo nombre, aunque no se afecten es una MALA PRACTICA

// const constante;
const constante = "Hola soy una constante"; // CONST es una constante.

var a = 1;
console.log(a);

a = 4;
console.log(a)

console.log(constante)
// constante = "Adios" // NOS DA UN ERROR

let b = 3;
console.log(b)

b = 5;
console.log(b);


var variable = "Hola soy una variable VAR";

for (var i = 0; i < 3; i++){
    var variable = "Soy la segunda variable";
}

console.log(variable);

let variableLet = "Hola soy una variable LET";

for (var i = 0; i < 3; i++){
    let variableLet = "Soy la segunda variable";
}

console.log(variableLet);

///////////

var num = 4

console.log(typeof num);

var num = "Hola ahora soy string";

console.log(typeof num);