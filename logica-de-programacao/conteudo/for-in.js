// const frutas = ['Pera', 'Laranja', 'Maçã', 'Uva'];

// for (let i in frutas) {
//     console.log(frutas[i]);
// }

const pessoa = {
    nome: 'Ivan',
    idade: 27,
    signo: 'Aquário',
};

for (let chave in pessoa) {
    console.log(`${chave}: ${pessoa[chave]}`);
}