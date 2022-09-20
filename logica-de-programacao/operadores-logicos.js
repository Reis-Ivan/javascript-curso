/**
 * Operadores lógicos:
 * && -> AND - E -> Todas as expressões precisam ser verdadeiras para retornar true
 * || -> OR - OU
 * !  -> NOT - NÃO
 */

// const expressaoAnd = true && true && true && false && true;
// const expressaoOr = false || false || true || false;

const user = 'Fulano';
const senha = '123456';

const vaiLogar = user === 'Fulano' && senha === '123456';
console.log(vaiLogar);

console.log(!false);