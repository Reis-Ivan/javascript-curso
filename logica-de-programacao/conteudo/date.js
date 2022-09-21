/**
 * const tresHoras = 60 * 60 * 3 * 1000
 * const umDia = 60 * 60 * 24 * 1000
 * const data = new Date(0 + tresHoras - umDia); date função contrutora
 * const data = new Date(1995, 0, 29); ano, mes, dia, hora, minuto, milesimosegundo
 * const data = new Date(1663688680538);
 * console.log('Dia', data.getDate());
 * console.log('Mes', data.getMonth() + 1); // Começa do zero
 * console.log('Ano', data.getFullYear());
 * console.log('Hora', data.getHours());
 * console.log('Minuto', data.getMinutes());
 * console.log('Segundo', data.getSeconds());
 * console.log('ms', data.getMilliseconds());
 * console.log('Dia da semana', data.getDay()); // 0 domingo, 6 - sábado
 * console.log(data.toString());
 * console.log(Date.now());
 */
function zeroEsquerda(num) {
    return num >= 10 ? num : `0${num}`;
}

function formataData(data) {
    const dia = zeroEsquerda(data.getDate());
    const mes = zeroEsquerda(data.getMonth() + 1);
    const ano = zeroEsquerda(data.getFullYear());
    const hora = zeroEsquerda(data.getHours());
    const min = zeroEsquerda(data.getMinutes());
    const seg = zeroEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);