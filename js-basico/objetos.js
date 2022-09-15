// function criaPessoa (nome, sobrenome, idade) {
//     return {
//         nome: nome,
//         sobrenome: sobrenome,
//         idade: idade
//     };
// }

// function criaPessoa(nome, sobrenome, idade) {
//     return { nome, sobrenome, idade };
// }

// const pessoa1 = criaPessoa('Ivan', 'Reis', 27);
// const pessoa2 = criaPessoa('Michelle', 'Alves', 26);
// console.log(pessoa1.nome, pessoa2.nome)

const pessoa1 = {
    nome: 'Ivan',
    sobrenome: 'Reis',
    idade: 27,

    apresentacao() {
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`)
    },

    fezAnivesario() {
        this.idade++
    },
};

pessoa1.apresentacao();
pessoa1.fezAnivesario();
pessoa1.apresentacao();