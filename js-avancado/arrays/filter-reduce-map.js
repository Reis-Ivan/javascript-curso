/**
 * Retorne a soma do dobro de todos os pares
 * -> Filtrar pares
 * -> Dobrar os valores
 * -> Reduzir (soma tudo)
 */

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const resultado = numeros.filter(vlr => vlr % 2 === 0).map(vlr => vlr * 2).reduce((ac, vlr) => { return ac += vlr; });
console.log(resultado);