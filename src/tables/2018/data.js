const { dataCompra } = require('../../dataReading/readCompras');
const { dataVenda } = require('../../dataReading/readVendas');

const re = /2018/;

const dataSales2018 = dataVenda.filter((item)=>{
    const date = item.data;
    if(re.test(date)){
        return item;
    }
});

const dataPurchases2018 = dataCompra.filter((item)=>{
    const date = item.data;
    if(re.test(date)){
        return item;
    }
});

const icms = dataPurchases2018.map((item)=> item.ICMS);
const totalIcms2018 = icms.reduce((previousValue, currentValue) => previousValue + currentValue).toFixed(2);

const st = dataPurchases2018.map((item)=> item.ST);
const totalSt2018 = st.reduce((previousValue, currentValue) => previousValue + currentValue).toFixed(2);

const sales = dataSales2018.map((item)=> item.total);
const totalSales2018 = sales.reduce((previousValue, currentValue) => previousValue + currentValue).toFixed(2);

const purchases = dataPurchases2018.map((item)=> item.total);
const totalPurchases2018 = purchases.reduce((previousValue, currentValue) => previousValue + currentValue).toFixed(2);

module.exports = {
    totalIcms2018,
    totalSt2018,
    totalSales2018,
    totalPurchases2018
}