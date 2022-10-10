function Calculadora() {
    const display = document.querySelector('.display');

    this.inicia = () => {
        cliqueBotoes();
        pressionaEnter();
        pressionaBackSpace();
    };

    const pressionaEnter = () => {
        display.addEventListener('keyup', (e) => {
            if (e.keyCode === 13) {
                realizaConta();
            }
        });
    };

    const pressionaBackSpace = () => {
        display.addEventListener('keydown', (e) => {
            if (e.keyCode === 8) {
                e.preventDefault();
                apagaUm();
            }
        });
    };

    const cliqueBotoes = () => {
        document.addEventListener('click', (event) => {
            const elemento = event.target;

            if (elemento.classList.contains('btn-num')) paraDisplay(elemento.innerText);
            if (elemento.classList.contains('btn-clear')) clearDisplay();
            if (elemento.classList.contains('btn-del')) apagaUm();
            if (elemento.classList.contains('btn-eq')) realizaConta();
        });
    };

    const paraDisplay = (valor) => display.value += valor;
    const clearDisplay = () => display.value = '';
    const apagaUm = () => display.value = display.value.slice(0, -1);

    const realizaConta = () => {
        let conta = display.value;

        try {
            conta = eval(conta);

            if (!conta) {
                alert('Conta inválida!');
                return;
            }

            display.value = String(conta);

        } catch (e) {
            alert('Conta inválida!');
            return;
        }
    };
}

const calculadora = new Calculadora();
calculadora.inicia();