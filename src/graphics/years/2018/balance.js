const { dataSales2018, dataPurchases2018 } = require('./data');

const totalDataSales = dataSales2018.map((item)=>{
    return item.total;
})

const totalSales = totalDataSales.reduce((previousValue, currentValue) => previousValue + currentValue).toFixed(2);

const totalDataPurchases = dataPurchases2018.map((item)=>{
    return item.total;
})

const totalPurchases = totalDataPurchases.reduce((previousValue, currentValue) => previousValue + currentValue).toFixed(2);

const balance2018 =  (totalPurchases - totalSales).toFixed(2);

module.exports = {
    balance2018
}