/*
Raiz quadrada: 7.429586495895986
55.1987555 é inteiro: false
É NaN: false
Arredondando pra baixo: 55
Arredondado pra cima: 56
Com duas csas decimais: 55.20
*/
const numero = Number(prompt('Digite um número'));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;
texto.innerHTML =`<p>
                    Raiz quadrada: ${numero ** (1/2)}<br>
                    ${numero} é inteiro: ${Number.isInteger(numero)}<br>
                    É NaN: ${Number.isNaN(numero)}<br>
                    Arredondando pra baixo: ${Math.floor(numero)}<br>
                    Arredondado pra cima: ${Math.ceil(numero)}<br>
                    Com duas csas decimais: ${numero.toFixed(2)}<br>
                </p>`;