const { balance2019 } =  require('./balance');
const { percent2019 } = require('./percent');

const balance2019Format = parseInt(balance2019).toLocaleString('pt-br', {minimumFractionDigits: 2});

const data2019 = {
    ano: '2019',
    saldo: `R$ ${balance2019Format}`,
    porcentagem: percent2019
}

module.exports = {
    data2019
}