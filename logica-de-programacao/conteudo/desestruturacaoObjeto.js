const pessoa = {
    nome: 'Ivan',
    sobrenome: 'Reis',
    idade: 27,
    endereco: {
        rua: 'Av. Brasil',
        numero: 45,
    }
};

// Atribuição via desestruturação
const { idade: id, endereco: { rua: r = 'Valor Padrão', numero: num = 'Valor Padrão' }, ...resto } = pessoa;
console.log(id, r, num, resto);