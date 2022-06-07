const { dataSales2021, dataPurchases2021 } = require('./data');

const totalDataSales = dataSales2021.map((item)=>{
    return item.total;
})

const totalSales = totalDataSales.reduce((previousValue, currentValue) => previousValue + currentValue).toFixed(2);

const totalDataPurchases = dataPurchases2021.map((item)=>{
    return item.total;
})

const totalPurchases = totalDataPurchases.reduce((previousValue, currentValue) => previousValue + currentValue).toFixed(2);

const balance2021 =  (totalSales - totalPurchases).toFixed(2);

module.exports = {
    balance2021
}