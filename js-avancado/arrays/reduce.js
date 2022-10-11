/** Reduce - reduz um array a um valor */

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const total = numeros.reduce((acumulador, valor, indice, array) => {
    acumulador += valor;
    return acumulador;
}, 0);
// console.log(total);

const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 147 },
    { nome: 'Ivan', idade: 27 },
]

const maisVelha = pessoas.reduce((acum, obj) => {
    if (acum.idade > obj.idade) return acum;
    else return obj;
});

console.log(maisVelha);