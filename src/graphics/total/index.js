const { balance2017 } = require('../years/2017/balance');
const { balance2018 } = require('../years/2018/balance');
const { balance2019 } = require('../years/2019/balance');
const { balance2020 } = require('../years/2020/balance');
const { balance2021 } = require('../years/2021/balance');

const balanceGeneral = parseInt(balance2017 + balance2018 + balance2019 + balance2020 + balance2021);


module.exports = {
    balanceGeneral
}