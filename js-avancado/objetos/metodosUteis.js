/**
 * Object.assing - copia um objeto
 * Object.getOwnPropertyDescriptor - exibe as configurações de uma propriedade do obj
 * Object.keys - retorna as chaves
 * Object.values - retorna as chaves
 * Object.entries - retorna [chave, valor]
 */

const produto = { nome: 'Caneca', preco: 1.8 };
for (let [chave, valor] of Object.entries(produto)) {
    console.log(chave, valor);
}