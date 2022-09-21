const elementos = [
    { tag: 'p', txt: 'Frase 1' },
    { tag: 'div', txt: 'Frase 2' },
    { tag: 'footer', txt: 'Frase 3' },
    { tag: 'section', txt: 'Frase 4' }
];

function criaElemento(obj) {
    const { tag } = obj;

    return document.createElement(`${tag}`);
}


const secao = document.querySelector('#sec');
const div = document.createElement('div');

for (let i = 0; i < elementos.length; i++) {
    let {tag, txt} = elementos[i]
    let el = document.createElement(tag);
    el.innerText = txt;
    div.appendChild(el);
}

secao.appendChild(div);