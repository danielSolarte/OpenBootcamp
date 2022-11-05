// FACTORIA DE 10 USANDO WHILE, IF Y BREAK

let resultado = 1;
let i = 1;

while(true){
    if(i != 10){
       resultado *= i;
       i++;
    } else {
        break;
    }
}

console.log(resultado)