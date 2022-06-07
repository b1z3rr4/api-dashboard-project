const { balance2020 } =  require('./balance');
const { percent2020 } = require('./percent');

const balance2020Format = parseInt(balance2020).toLocaleString('pt-br', {minimumFractionDigits: 2});

const data2020 = {
    ano: '2020',
    saldo: `R$ ${balance2020Format}`,
    porcentagem: percent2020
}

module.exports = {
    data2020
}