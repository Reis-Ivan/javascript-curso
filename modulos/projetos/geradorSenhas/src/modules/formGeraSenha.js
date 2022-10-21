import geraSenha from "./geradores";

const resultado = document.querySelector('.resultado');
const quantidade = document.querySelector('.quantidade');
const numeros = document.querySelector('.numeros');
const maiusculas = document.querySelector('.maiusculas');
const minusculas = document.querySelector('.minusculas');
const simbolo = document.querySelector('.simbolo');
const btn = document.querySelector('.btn')

export default () => {
    btn.addEventListener('click', () => {
        resultado.innerHTML = gera();
    });
};

function gera() {
    const senha = geraSenha(
        quantidade.value,
        maiusculas.checked,
        minusculas.checked,
        numeros.checked,
        simbolo.checked,
    );

    return senha || 'Nada selecionado';
}