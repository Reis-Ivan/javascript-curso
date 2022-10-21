export const nome = 'Ivan';
export const sobrenome = 'Reis';
export const idade = 28;

// function soma(x, y) {
//     return x + y;
// }

export default class Pessoa {
    constructor(nome, sobrenome, idade) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
    }
}

// export default (x, y) => x * y;

// export { nome, sobrenome, idade, soma };
// export { nome as nome2, sobrenome, idade, soma };