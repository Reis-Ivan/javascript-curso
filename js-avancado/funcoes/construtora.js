// Função contrutora -> objetos
// Função fábrica -> objetos
// Construtora -> inicia-se com letra maiúscula ex: Pessoa (new)
function Pessoa(nome, sobrenome) {
    // Atributos/ métodos privados
    const ID = 123456;
    const metodoIntenro = () => {
        console.log('Método interno');
    };

    // Atributos/métodos públicos
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function () {
        console.log(`${this.nome}: sou um método.`);
    }
}

const p1 = new Pessoa('Ivan', 'Reis');
const p2 = new Pessoa('Maria', 'Silva');
p1.metodo();