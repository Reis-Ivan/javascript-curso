// Referente a variáveis de ambiente de desenvolvimento (senhas, emais...)
require('dotenv').config();

const express = require('express');
const app = express();

// Modelar a base de dados
const mongoose = require('mongoose');
mongoose.connect(process.env.CONNECTIONSTRING, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.emit('pronto');
    })
    .catch(e => console.log(e));

// Sessões para identificar o navegador do cliente
const session = require('express-session');

// Salvar as sessões na base de dados
const MongoStore = require('connect-mongo');

// Flash messages são mensagens autodestrutivas (mandar feedback para o user)
const flash = require('connect-flash');

// Rotas da aplicação (home, contato, pagina inicial...)
const routes = require('./routes');

// Trabalhor com caminhos dos arquivos
const path = require('path');

// Segurança
const helmet = require('helmet');

// Tokens de segurança para os formulários
const csrf = require('csurf');

// Middlewares são funções executadas entre as rota
const { middlewareGlobal, checkCsrfError, csrfMiddleware } = require('./src/middleware/middleware');

app.use(helmet());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'public')));

// Configuração de sessão
const sessionOptions = session({
    secret: 'asdqwezxc asdad()',
    store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true
    }
});

app.use(sessionOptions);
app.use(flash());

// Seta as pastas de dos arquivos e engine utilizada
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(csrf());

// Nossos próprios Middlewares
app.use(middlewareGlobal);
app.use(checkCsrfError);
app.use(csrfMiddleware);
app.use(routes);

app.on('pronto', () => {
    app.listen(3000, () => {
        console.log('Acessar http://localhost:3000');
        console.log('Servidor executando na porta 3000...');
    });
});

