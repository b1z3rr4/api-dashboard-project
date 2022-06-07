const { balanceGeneral } = require('../../total/index');
const { balance2021 } = require('./balance');

const percent2021 = ((balance2021 * 100) / balanceGeneral).toFixed(2);

module.exports = {
    percent2021
}