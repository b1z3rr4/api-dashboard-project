const { dataSales2020, dataPurchases2020 } = require('./data');

const totalDataSales = dataSales2020.map((item)=>{
    return item.total;
})

const totalSales = totalDataSales.reduce((previousValue, currentValue) => previousValue + currentValue).toFixed(2);

const totalDataPurchases = dataPurchases2020.map((item)=>{
    return item.total;
})

const totalPurchases = totalDataPurchases.reduce((previousValue, currentValue) => previousValue + currentValue).toFixed(2);

const balance2020 =  (totalSales - totalPurchases).toFixed(2);

module.exports = {
    balance2020
}