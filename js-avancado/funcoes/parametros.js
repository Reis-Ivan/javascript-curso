// arguments - sustenta todos os argumentos enviados
// function funcao(a, b = 1, c = 4) {
//     console.log(a + b + c);
//     console.log(a, b, c);
// }
// funcao(2);

// function funcao({ nome, sobrenome, idade }) {
//     console.log(nome, sobrenome, idade);
// }
// let obj = { nome: 'Ivan', sobrenome: 'Reis', idade: 20 };
// funcao(obj);

// rest operator ...
const conta = function (operador, acumulador, ...numeros) {
    for (let num of numeros) {
        if (operador === '+') acumulador += num;
        if (operador === '-') acumulador -= num;
        if (operador === '*') acumulador *= num;
        if (operador === '/') acumulador /= num;
    }
    console.log(acumulador);
}
conta('+', 1, 20, 30, 40, 50);