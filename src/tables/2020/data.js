const { dataCompra } = require('../../dataReading/readCompras');
const { dataVenda } = require('../../dataReading/readVendas');

const re = /2020/;

const dataSales2020 = dataVenda.filter((item)=>{
    const date = item.data;
    if(re.test(date)){
        return item;
    }
});

const dataPurchases2020 = dataCompra.filter((item)=>{
    const date = item.data;
    if(re.test(date)){
        return item;
    }
});

const icms = dataPurchases2020.map((item)=> item.ICMS);
const totalIcms2020 = icms.reduce((previousValue, currentValue) => previousValue + currentValue).toFixed(2);

const st = dataPurchases2020.map((item)=> item.ST);
const totalSt2020 = st.reduce((previousValue, currentValue) => previousValue + currentValue).toFixed(2);

const sales = dataSales2020.map((item)=> item.total);
const totalSales2020 = sales.reduce((previousValue, currentValue) => previousValue + currentValue).toFixed(2);

const purchases = dataPurchases2020.map((item)=> item.total);
const totalPurchases2020 = purchases.reduce((previousValue, currentValue) => previousValue + currentValue).toFixed(2);

module.exports = {
    totalIcms2020,
    totalSt2020,
    totalSales2020,
    totalPurchases2020
}