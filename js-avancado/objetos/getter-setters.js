function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    let estoquePrivado = estoque;

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: () => estoquePrivado,
        set: (vlr) => {
            if (typeof vlr !== 'number') { throw new TypeError('Valor inválido'); }
            estoquePrivado = vlr;
        }
    });

}

const p1 = new Produto('Camisa', 20, 3);
p1.estoque = '500';
console.log(p1.estoque);