// Map - retorna array com valores alterados
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const dobro = numeros.map(num => num * 2);
// console.log(dobro);
// console.log(numeros);


/** Para cada elemento:
 *  Retorne apenas uma string com nome da pessoa
 *  Remova apenas a chave "nome" do objeto
 *  Adicione uma chave id em cada objeto
 */

const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
    { nome: 'Ivan', idade: 27 },
]

const nomes = pessoas.map(obj => ({ Nome: obj.nome }));
console.log(nomes);

const idades = pessoas.map(obj => ({ Idade: obj.idade }));
console.log(idades);

const chaveID = pessoas.map((obj, index) => {
    const newObj = { ...obj };
    newObj.id = (index + 1) * 1000
    return newObj;
});
console.log(chaveID);
console.log(pessoas);