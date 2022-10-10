// IIFE -> Immediately invoked function expression
(function (idade, peso, altura) {
    const sobrenome = 'Reis';
    function criaNome(nome) {
        return nome + ' ' + sobrenome;
    }

    function falaNome() {
        console.log(criaNome('Ivan'));
    }

    falaNome();
    console.log(idade, peso, altura);
})(27, 68, 1.75);
