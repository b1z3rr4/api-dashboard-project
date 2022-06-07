const { balance2018 } =  require('./balance');
const { percent2018 } = require('./percent');

const balance2018Format = parseInt(balance2018).toLocaleString('pt-br', {minimumFractionDigits: 2});

const data2018 = {
    ano: '2018',
    saldo: `R$ ${balance2018Format}`,
    porcentagem: percent2018
}

module.exports = {
    data2018
}