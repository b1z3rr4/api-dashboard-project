const { dataCompra } = require('../../dataReading/readCompras');

const values = dataCompra.map((item)=>{
    return item.total;
})

const totalPurchases = values.reduce((previousValue, currentValue) => previousValue + currentValue).toFixed(2);


module.exports = {
    totalPurchases
}