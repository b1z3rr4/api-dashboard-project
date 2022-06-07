const { balanceGeneral } = require('../../total/index');
const { balance2019 } = require('./balance');

const percent2019 = ((balance2019 * 100) / balanceGeneral).toFixed(2);

module.exports = {
    percent2019
}