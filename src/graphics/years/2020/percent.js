const { balanceGeneral } = require('../../total/index');
const { balance2020 } = require('./balance');

const percent2020 = ((balance2020 * 100) / balanceGeneral).toFixed(2);

module.exports = {
    percent2020
}