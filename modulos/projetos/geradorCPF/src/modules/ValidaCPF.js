export default class ValidaCPF {
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

    static criaDigito(cpfParcial) {
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
