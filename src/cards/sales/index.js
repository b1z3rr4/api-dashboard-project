const { dataVenda } = require('../../dataReading/readVendas');

const values = dataVenda.map((item)=>{
    return item.total;
})

const totalSales = values.reduce((previousValue, currentValue) => previousValue + currentValue).toFixed(2);


module.exports = {
    totalSales
}