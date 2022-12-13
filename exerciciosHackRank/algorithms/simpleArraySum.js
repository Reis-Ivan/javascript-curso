// Somar elementos do array

ar = [1, 2, 3, 4, 10, 11];

function simpleArraySum(ar) {
  const resultado = ar.reduce((acumulador, valor) => {
    acumulador += valor;
    return acumulador;
  }, 0);

  return resultado;
}

console.log(simpleArraySum(ar));
