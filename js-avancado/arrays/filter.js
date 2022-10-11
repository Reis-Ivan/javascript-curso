// Filter - filtra o array, requer retorno booleano
// Retorne os números maiores que 10

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const maiores = numeros.filter(valor => valor > 10);
// console.log(maiores);

// Retorne as pessoas que tem o nome com 5 letras ou mais
// Retorne as pessoas com mais de 50 anos
// Retorne as pessoas cujo o nome termina com a

const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
    { nome: 'Ivan', idade: 27 },
]

const cincoMais = pessoas.filter(p => p.nome.length >= 5);
console.log(cincoMais);

const idadeMaior50 = pessoas.filter(p => p.idade > 50);
console.log(idadeMaior50);

const terminaComA = pessoas.filter(p => p.nome.toLocaleLowerCase().endsWith('a'));
console.log(terminaComA);