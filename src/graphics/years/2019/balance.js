const { dataSales2019, dataPurchases2019 } = require('./data');

const totalDataSales = dataSales2019.map((item)=>{
    return item.total;
})

const totalSales = totalDataSales.reduce((previousValue, currentValue) => previousValue + currentValue).toFixed(2);

const totalDataPurchases = dataPurchases2019.map((item)=>{
    return item.total;
})

const totalPurchases = totalDataPurchases.reduce((previousValue, currentValue) => previousValue + currentValue).toFixed(2);

const balance2019 =  (totalPurchases - totalSales).toFixed(2);

module.exports = {
    balance2019
}