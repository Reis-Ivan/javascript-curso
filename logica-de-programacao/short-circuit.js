/**
 * && -> Se false -> retornar o valor - Se verdadeiro -> retorna o valor
 * || -> Retorna o primeiro valor verdadeiro ou último falso
 
 FALSY - retornam falso
 *false
 0
 '' "" ``
 null / undefined
 NaN
 */

//  const corUsuario = 'Vermelho';
//  const corPadrao = corUsuario || 'Preto';
// console.log(corPadrao);

const a = 0;
const b = null;
const c = 'false';
const d = false;
const e = NaN;

console.log(a || b || c || d || e);