class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        if (this.ligado) {
            console.log(`${this.nome} já está ligado.`);
            return;
        }

        this.ligado = true;
    }

    desligar() {
        if (!this.ligado) {
            console.log(`${this.nome} já está desligado.`);
            return;
        }

        this.ligado = false;
    }
}

class Smartphone extends DispositivoEletronico {
    constructor(nome, cor, modelo) {
        super(nome); // Herança da superclass

        this.cor = cor;
        this.modelo = modelo;
    }
}

class Tablet extends DispositivoEletronico {
    constructor(nome, temWifi) {
        super(nome);
        this.temWifi = temWifi;
    }

    ligar () {
        console.log('Olha, você alterou o método ligar.');
    }

    falaOi () {
        console.log('Oi');
    }
}

const s1 = new Smartphone('Samsung', 'Preto', 'Galaxy S10');
console.log(s1);

const t1 = new Tablet('iPad', true);
t1.ligar();
console.log(t1);
t1.falaOi();