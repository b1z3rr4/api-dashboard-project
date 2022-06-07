const { balance2021 } =  require('./balance');
const { percent2021 } = require('./percent');

const balance2021Format = parseInt(balance2021).toLocaleString('pt-br', {minimumFractionDigits: 2});

const data2021 = {
    ano: '2021',
    saldo: `R$ ${balance2021Format}`,
    porcentagem: percent2021
}

module.exports = {
    data2021
}