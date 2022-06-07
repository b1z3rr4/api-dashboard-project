const { dataCompra } = require('../../dataReading/readCompras');

const values = dataCompra.map((item)=>{
    return item.ST;
})

const totalST = values.reduce((previousValue, currentValue) => previousValue + currentValue).toFixed(2);


module.exports = {
    totalST
}