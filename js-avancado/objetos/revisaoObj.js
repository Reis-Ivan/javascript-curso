/**
 * Objeto - par chave/valor
 * Factory functions / Constructor functions / Classes
 */

// const pessoa = {
//     nome: 'João',
//     sobrenome: 'Silva',
// };

// console.log(pessoa.nome);
// console.log(pessoa.sobrenome);

// console.log(pessoa['nome']);
// console.log(pessoa['sobrenome']);

// const pessoa1 = new Object();
// pessoa1.nome = 'João';
// pessoa1.sobrenome = 'Silva';
// pessoa1.idade = 27;
// pessoa1.falarNome = function () {
//     return (`${this.nome} está falando seu nome.`);
// }
// pessoa1.getDataNascimento = function () {
//     const dataAtual = new Date();
//     return dataAtual.getFullYear() - this.idade;
// };

// // delete pessoa1.nome; // deletar uma chave
// // console.log(pessoa1.falarNome());
// // console.log(pessoa1.getDataNascimento());

// for (let chave in pessoa1) {
//     console.log(pessoa1[chave]);
// }

// Factory
function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        },
    };
}

const p1 = criaPessoa('Ivan', 'Reis');
console.log(p1.nomeCompleto);