///               0        1        2         3           4           5
const nomes = ['Maria', 'João', 'Carlos', 'Eduardo', 'Gabriela'];

// nomes.splie(indice, delete, element1, element2, element3...);

const removidos = nomes.splice(2, 2, 'Ivan', 'Michelle');
console.log(nomes, removidos);
