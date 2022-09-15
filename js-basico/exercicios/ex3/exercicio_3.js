/**
 * 1 - Criar um objeto para cada submição
 * 2 - Adicionar o objeto ao array pessoas e logar
 * 3 - Criar paragrafo em resultado
 */

function criaPessoa(nome, sobrenome, peso, altura) {
    return { nome, sobrenome, peso, altura };
}

function criaParagrafo(pessoa) {

    const resultado = document.querySelector('.resultado');

    resultado.innerHTML += `<p>Nome: ${pessoa.nome}</p>`;
    resultado.innerHTML += `<p>Sobrenome: ${pessoa.sobrenome}</p>`;
    resultado.innerHTML += `<p>Peso: ${pessoa.peso}</p>`;
    resultado.innerHTML += `<p>Altura: ${pessoa.altura}</p>`;
}

function meuEscopo() {
    const form = document.querySelector('.form');
    // const resultado = document.querySelector('.resultado');
    const pessoas = [];

    function recebeEventoForm(evento) {

        evento.preventDefault(); // Cancelador de evento

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        let pessoa = criaPessoa(nome.value, sobrenome.value, peso.value, altura.value);

        pessoas.push(pessoa);
        console.log(pessoas);
        criaParagrafo(pessoa)
    }
    form.addEventListener('submit', recebeEventoForm);
}
meuEscopo();