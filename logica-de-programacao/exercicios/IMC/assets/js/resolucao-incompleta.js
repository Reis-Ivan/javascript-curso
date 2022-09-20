

// function validaDados(peso, altura) {
//     function validaPeso(peso) {
//         if (typeof (peso) != Number || peso <= 0 || peso === null) {
//             return 'Peso inválido';
//         }
//     }
//     function validaAltura(altura) {
//         if (typeof (altura) != Number || altura <= 0 || altura === null) {
//             return 'Altura inválido';
//         }
//     }

//     validaPeso(peso);
//     validaAltura(altura);
// }


function calculoImc(peso, altura) {
    return peso / altura ** 2;
}

function resultado(imc) {

    if (imc < 18.5) {
        return `Seu IMC é ${imc.toFixed(2)} (Abaixo do peso)`;
    } else if (imc >= 18.5 && imc <= 24.9) {
        return `Seu IMC é ${imc.toFixed(2)} (Peso normal)`;
    } else if (imc >= 25 && imc <= 29.9) {
        return `Seu IMC é ${imc.toFixed(2)} (Sobrepeso)`;
    } else if (imc >= 30 && imc <= 34.9) {
        return `Seu IMC é ${imc.toFixed(2)} (Obesidade grau 1)`;
    } else if (imc >= 35 && imc <= 39.9) {
        return `Seu IMC é ${imc.toFixed(2)} (Obesidade grau 2)`;
    } else if (imc >= 40) {
        return `Seu IMC é ${imc.toFixed(2)} (Obesidade grau 3)`;
    }

}

function exibeResultado(res) {
    const resultado = document.querySelector(".resultado-imc");
    resultado.innerHTML = `<p>${res}</p>`;
}


function main() {
    const form = document.querySelector(".form");

    function recebeEventoForm(evento) {

        evento.preventDefault();

        const peso = form.querySelector(".peso");
        const altura = form.querySelector(".altura");

        const imc = calculoImc(peso.value, altura.value);
        console.log(imc);
        const resposta = resultado(imc);
        console.log(resposta);
        exibeResultado(resposta);
    }

    form.addEventListener('submit', recebeEventoForm);
}

main();