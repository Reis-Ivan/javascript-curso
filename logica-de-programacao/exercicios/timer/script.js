function relogio() {

    function getTimeFromSeconds(seg) {
        const data = new Date(seg * 1000); // Milisegundos
        return data.toLocaleTimeString('pt-BR', { hour12: false, timeZone: 'GMT' });
    }

    const relogio = document.querySelector('.relogio');
    let segundos = 0; // Variável de controle
    let timer;

    function iniciaRelogio() {
        timer = setInterval(function () {
            segundos++;
            relogio.innerHTML = getTimeFromSeconds(segundos);
        }, 1000);
    }

    document.addEventListener('click', function (e) {
        const elemento = e.target;

        if (elemento.classList.contains('zerar')) {
            relogio.classList.remove('pausado');
            clearInterval(timer);
            relogio.innerHTML = '00:00:00';
            segundos = 0;
        }

        if (elemento.classList.contains('iniciar')) {
            clearInterval(timer); // Garantir que não haja 2 timers
            relogio.classList.remove('pausado');
            iniciaRelogio();
        }

        if (elemento.classList.contains('pausar')) {
            relogio.classList.add('pausado');
            clearInterval(timer);
        }
    })
}

relogio();