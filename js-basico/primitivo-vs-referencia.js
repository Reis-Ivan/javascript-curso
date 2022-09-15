/*
Primitivos (imutáveis)- string, number, boolean, undefined, null (bigint, symbol) 

Referência (mutáveis) - array, object, function
*/

let letra1 = 'A';
let letra2 = letra1; //cópia

console.log(letra1, letra2);

letra1 = 'C';
console.log(letra1, letra2);

let a = [1, 2, 3];
let b = a; // apotam para o mesmo lugar na memória, solução -> let b = [...a];

console.log(a, b);

a.push('4');
console.log(a, b);

b.pop();
console.log(a, b);