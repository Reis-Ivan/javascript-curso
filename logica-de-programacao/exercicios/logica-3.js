/**
 * Escreve uma função que recebe um número e retorn o seguinte:
 * Número divisível por 3 = Fizz
 * Número divisível por 5 = Buzz
 * Número divisível por 3 e 5 = FizzBuzz
 * Número NÃO é divisível por 3 r 5 = Retorna o próprio número
 * Chegar se o número é realmente um número = Retorna o próprio número
 * Use a função com números de 0 a 100
 */

function fizzBuzz(num) {
    if (typeof num !== 'number') return num;
    else if (num % 3 === 0 && num % 5 === 0) return 'FizzBuzz';
    else if (num % 3 === 0) return 'Fizz';
    else if (num % 5 === 0) return 'Buzz';
    else return num;
}

for (let i = 0; i <= 100; i++) {
    console.log(`${i} - ${fizzBuzz(i)}`);
}

