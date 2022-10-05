// Escreba uma função que recebe 2 números e retorne o maior deles.
function retornaMaior(x, y) {
    // if (x > y) return x;
    // return y;
    return x > y ? x : y;
}

const max = (x,y) => x > y ? x : y;

console.log(retornaMaior(9, 14));

console.log(max(10, 9));