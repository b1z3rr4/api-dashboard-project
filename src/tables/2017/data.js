const { dataCompra } = require('../../dataReading/readCompras');
const { dataVenda } = require('../../dataReading/readVendas');

const re = /2017/;

const dataSales2017 = dataVenda.filter((item)=>{
    const date = item.data;
    if(re.test(date)){
        return item;
    }
});

const dataPurchases2017 = dataCompra.filter((item)=>{
    const date = item.data;
    if(re.test(date)){
        return item;
    }
});

const icms = dataPurchases2017.map((item)=> item.ICMS);
const totalIcms2017 = icms.reduce((previousValue, currentValue) => previousValue + currentValue).toFixed(2);

const st = dataPurchases2017.map((item)=> item.ST);
const totalSt2017 = st.reduce((previousValue, currentValue) => previousValue + currentValue).toFixed(2);

const sales = dataSales2017.map((item)=> item.total);
const totalSales2017 = sales.reduce((previousValue, currentValue) => previousValue + currentValue).toFixed(2);

const purchases = dataPurchases2017.map((item)=> item.total);
const totalPurchases2017 = purchases.reduce((previousValue, currentValue) => previousValue + currentValue).toFixed(2);

module.exports = {
    totalIcms2017,
    totalSt2017,
    totalSales2017,
    totalPurchases2017
}