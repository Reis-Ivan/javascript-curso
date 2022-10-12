// 705.484.450-52 070.987.720-03
/**
  
 
 7x 0x 5x 4x 8x 4x 4x 5x 0x
 10 9  8  7  6  5  4  3  2
 70 0  40 28 48 20 16 15 0 = 237

 11 - (237 % 11) = 5 (Primeiro dígito)
 Se o número for maior que 9, considerar 0;

 7x 0x 5x 4x 8x 4x 4x 5x 0x 5x
 11 10 9  8  7  6  5  4  3  2
 77 0  45 32 56 24 20 20 0  10 = 284

 11 - (284 % 11) = 2 (Primeiro dígito)
*/

function limpaCPF(str) { return str.replace(/\D+/g, ""); }

function arrayMultiplicado(arr, mult = 10) {
    let arrMult = [];

    for (num of arr) {
        arrMult.push(String(Number(num) * mult));
        mult--;
    }

    return arrMult;
}

function setDigito(soma) {
    num = 11 - (soma % 11)

    if (num > 9) return 0

    return num;
}

function addDigito(arr, dig) { return arr.push(String(dig)); }

function validaCPF(str1, str2) { return str1 === str2 }

let cpf = '705.484.450-52';
let cpfLimpo = limpaCPF(cpf);
let cpfArray = Array.from(cpfLimpo);
let soma;
let digito;

// Primeira rodada
let cpfTest = [...cpfArray.slice(0, 9)];
let arrMult = arrayMultiplicado(cpfTest.slice(0, 9));

soma = arrMult.map((el) => Number(el)).reduce((acum, valor) => {
    acum += valor;
    return acum;
}, 0);

digito = setDigito(soma);

addDigito(cpfTest, digito);

// Segunda rodada
arrMult = arrayMultiplicado(cpfTest.slice(0, 10), 11);
soma = arrMult.map((el) => Number(el)).reduce((acum, valor) => {
    acum += valor;
    return acum;
}, 0);

digito = setDigito(soma);

addDigito(cpfTest, digito);

// Validação
cpfTest = cpfTest.join("");
cpfArray = cpfArray.join("");

console.log(validaCPF(cpfTest,cpfArray));