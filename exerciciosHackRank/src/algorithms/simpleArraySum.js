const arr = [1, 2, 3, 4, 10, 11];

function simpleArraySum(arr) {
  const resultado = arr.reduce((acumulador, valor) => {
    acumulador += valor;
    return acumulador;
  }, 0);

  return resultado;
}

console.log(simpleArraySum(arr));
