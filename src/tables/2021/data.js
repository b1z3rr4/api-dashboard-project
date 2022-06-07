const { dataCompra } = require('../../dataReading/readCompras');
const { dataVenda } = require('../../dataReading/readVendas');

const re = /2021/;

const dataSales2021 = dataVenda.filter((item)=>{
    const date = item.data;
    if(re.test(date)){
        return item;
    }
});

const dataPurchases2021 = dataCompra.filter((item)=>{
    const date = item.data;
    if(re.test(date)){
        return item;
    }
});

const icms = dataPurchases2021.map((item)=> item.ICMS);
const totalIcms2021 = icms.reduce((previousValue, currentValue) => previousValue + currentValue).toFixed(2);

const st = dataPurchases2021.map((item)=> item.ST);
const totalSt2021 = st.reduce((previousValue, currentValue) => previousValue + currentValue).toFixed(2);

const sales = dataSales2021.map((item)=> item.total);
const totalSales2021 = sales.reduce((previousValue, currentValue) => previousValue + currentValue).toFixed(2);

const purchases = dataPurchases2021.map((item)=> item.total);
const totalPurchases2021 = purchases.reduce((previousValue, currentValue) => previousValue + currentValue).toFixed(2);

module.exports = {
    totalIcms2021,
    totalSt2021,
    totalSales2021,
    totalPurchases2021
}