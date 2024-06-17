// Você recebe um array de números inteiros. Precisa reorganizá-lo de forma que
// todos os números pares fiquem antes dos números ímpares.

let array_par = [ 2, 4, 6];
let array_impar = [ 1, 3, 5];
let aux = "";

let array_total = [ ...array_impar, ...array_par];

for(let i = 0; i < array_total.length; i++) {
    if(array_total[i] % 2 == 0) {
        aux = array_total[i];
        array_total.splice(i, 1);
        array_total.unshift(aux);
        
    }
}

console.log(array_total)

