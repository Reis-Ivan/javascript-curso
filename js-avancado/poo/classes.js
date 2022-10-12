// Classes -> molde
class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar() {
        console.log(`${this.nome} está falando.`);
    }
}

// Função construtora
function Pessoa2(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa2.prototype.falar = function () {
    console.log(`${this.nome} está falando.`);
}

const p1 = new Pessoa('Ivan', 'Reis');
const p2 = new Pessoa2('Ivan', 'Reis');
console.log(p1);
console.log(p2);
