const nome = prompt('Digite seu nome completo: ')

document.body.innerHTML += `O seu nome é <strong>${nome}</strong> <br>`;
document.body.innerHTML += `Seu nome tem <strong>${nome.replace(/ /g, "").length}</strong> letras <br>`;
document.body.innerHTML += `A segunda letra do seu nome é: <strong>${nome.charAt(1)}</strong> <br>`;
document.body.innerHTML += `Qual o primeiro índice da letra R do seu nome? <strong>${nome.indexOf('R')}</strong> <br>`;
document.body.innerHTML += `Qual o último índice da letra R do seu nome? <strong>${nome.lastIndexOf('R')}</strong> <br>`;
document.body.innerHTML += `As últimas 3 letras do seu nome são: <strong>${nome.slice(-3)}</strong> <br>`;
document.body.innerHTML += `Aas palavras do seu nome são: <strong>${nome.split(" ")}</strong> <br>`
document.body.innerHTML += `Seu nome com letras maiúculas: <strong>${nome.toLocaleUpperCase()}</strong> <br>`;
document.body.innerHTML += `Seu nome com letras minúsculas: <strong>${nome.toLocaleLowerCase()}</strong> <br>`;