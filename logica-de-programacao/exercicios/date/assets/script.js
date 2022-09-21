function nomeDiaSemana(numeroDia) {
    let diaSemanaTexto;
    switch (numeroDia) {
        case 0:
            diaSemanaTexto = 'Domingo';
            return diaSemanaTexto;;
        case 1:
            diaSemanaTexto = 'Segunda-feira';
            return diaSemanaTexto;
        case 2:
            diaSemanaTexto = 'Terça-feira';
            return diaSemanaTexto;
        case 3:
            diaSemanaTexto = 'Quarta-feira';
            return diaSemanaTexto;
        case 4:
            diaSemanaTexto = 'Quinta-feira';
            return diaSemanaTexto;
        case 5:
            diaSemanaTexto = 'Sexta-feira';
            return diaSemanaTexto;
        case 6:
            diaSemanaTexto = 'Sábado';
            return diaSemanaTexto;
        default:
            diaSemanaTexto = '';
            return diaSemanaTexto;
    }
}

function zeroEsquerda(num) {
    return num >= 10 ? num : `0${num}`;
}

function formataData(data) {
    const nomeDia = nomeDiaSemana(data.getDay());
    const numDia = data.getDate();
    const nomeMes = data.toLocaleString("pt-BR", { month: "long" });
    const ano = data.getFullYear();
    const horas = zeroEsquerda(data.getHours())
    const minutos = zeroEsquerda(data.getMinutes());

    return `${nomeDia}, ${numDia} de ${nomeMes} de ${ano} ${horas}:${minutos}`
}

function setData(data) {
    const dataFormatada = formataData(data);
    const resultado = document.querySelector(".data");
    resultado.innerHTML = dataFormatada;
}

const hoje = new Date();
setData(hoje);
