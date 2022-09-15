// Trecho de código que executa determinadas ações
function saudacao(nome) {
    console.log(`Salve ${nome}!`);
}

function soma(valor1 = 1, valor2 = 1) {
    return valor1 + valor2;
}

// const raiz = function (numero) {
//     return numero ** 0.5;
// };

const raiz = n => n ** 0.5; // Arroy funciton, bem moderno 


console.log(soma(9));
console.log(soma(10,2));
console.log(raiz(9));