const { balance2017 } =  require('./balance');
const { percent2017 } = require('./percent');

const balance2017Format = parseInt(balance2017).toLocaleString('pt-br', {minimumFractionDigits: 2});

const data2017 = {
    ano: '2017',
    saldo: `R$ ${balance2017Format}`,
    porcentagem: percent2017
}

module.exports = {
    data2017
}