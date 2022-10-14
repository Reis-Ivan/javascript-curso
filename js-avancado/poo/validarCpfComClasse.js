// 705.484.450-52 070.987.720-03
/**  
 7x 0x 5x 4x 8x 4x 4x 5x 0x
 10 9  8  7  6  5  4  3  2
 70 0  40 28 48 20 16 15 0 = 237

 11 - (237 % 11) = 5 (Primeiro dígito)
 Se o número for maior que 9, considerar 0;

 7x 0x 5x 4x 8x 4x 4x 5x 0x 5x
 11 10 9  8  7  6  5  4  3  2
 77 0  45 32 56 24 20 20 0  10 = 284

 11 - (284 % 11) = 2 (Primeiro dígito)
*/

class ValidaCPF {
    constructor(cpfEnviado) {
        Object.defineProperty(this, 'cpfLimpo', {
            writable: false,
            enumerable: false,
            configurable: false,
            value: cpfEnviado.replace(/\D+/g, '')
        });
    }

    valida() {
        if (!this.cpfLimpo) return false;
        if (this.cpfLimpo.length !== 11) return false;
        if (this.isSequencia()) return false;

        const cpfParcial = this.cpfLimpo.slice(0, -2);
        const d1 = this.criaDigito(cpfParcial);
        const d2 = this.criaDigito(cpfParcial + d1);
        const novoCPF = cpfParcial + d1 + d2;

        return novoCPF === this.cpfLimpo;
    }

    criaDigito(cpfParcial) {
        const cpfArr = Array.from(cpfParcial);
        let reg = cpfArr.length + 1;
        const total = cpfArr.reduce((ac, val) => {
            ac += (reg * Number(val));
            reg--;
            return ac;
        }, 0);
        const dig = 11 - (total % 11);
        return dig > 9 ? '0' : String(dig);
    }

    isSequencia() {
        const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
        return sequencia === this.cpfLimpo;
    }
}



const cpf1 = new ValidaCPF('705.484.450-52');
if (cpf1.valida()) console.log('CPF válido');
else console.log('CPF inválido');

const cpf2 = new ValidaCPF('070.987.720-03');
if (cpf2.valida()) console.log('CPF válido');
else console.log('CPF inválido');

const cpf3 = new ValidaCPF('111.111.111-11');
if (cpf3.valida()) console.log('CPF válido');
else console.log('CPF inválido');


