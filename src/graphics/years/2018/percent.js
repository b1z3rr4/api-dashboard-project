const { balanceGeneral } = require('../../total/index');
const { balance2018 } = require('./balance');

const percent2018 = ((balance2018 * 100) / balanceGeneral).toFixed(2);

module.exports = {
    percent2018
}