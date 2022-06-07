const { dataSales2017, dataPurchases2017 } = require('./data');

const totalDataSales = dataSales2017.map((item)=>{
    return item.total;
})

const totalSales = totalDataSales.reduce((previousValue, currentValue) => previousValue + currentValue).toFixed(2);

const totalDataPurchases = dataPurchases2017.map((item)=>{
    return item.total;
})

const totalPurchases = totalDataPurchases.reduce((previousValue, currentValue) => previousValue + currentValue).toFixed(2);

const balance2017 =  (totalPurchases - totalSales).toFixed(2);

module.exports = {
    balance2017
}