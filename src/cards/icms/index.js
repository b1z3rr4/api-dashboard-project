const { dataCompra } = require('../../dataReading/readCompras');

const values = dataCompra.map((item)=>{
    return item.ICMS;
})

const totalICMS = values.reduce((previousValue, currentValue) => previousValue + currentValue).toFixed(2);

module.exports = {
    totalICMS
}