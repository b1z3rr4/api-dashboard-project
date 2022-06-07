const { balanceGeneral } = require('../../total/index');
const { balance2017 } = require('./balance');

const percent2017 = ((balance2017 * 100) / balanceGeneral).toFixed(2);

module.exports = {
    percent2017
}
