// Funções que retornam um objeto (Factory Function)
// this - se refere a quem está "achamando"
function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,

        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        },

        // Setter
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        },

        fala(assunto = 'falando sobre NADA') {
            return `${this.nome} está ${assunto}.`;
        },

        altura,
        peso,
        
        // Getter - Função vira atributo dispensa o uso de () na chamada.
        get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        },
    };
}

const p1 = criaPessoa('Ivan', 'Reis', 1.75, 68);
p1.nomeCompleto = 'Ivan Reis Rosa';
console.log(p1.nome);
console.log(p1.sobrenome);