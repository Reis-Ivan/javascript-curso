import 'core-js/stable';
import 'regenerator-runtime/runtime';

import Login from './modules/Login';

const login = new Login('.form-login');
const cadastro = new Login('.form-casastro');

login.init();
cadastro.init();

console.log('Olá mundo!')

// import './assets/css/style.css';
