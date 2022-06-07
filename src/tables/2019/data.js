const { dataCompra } = require('../../dataReading/readCompras');
const { dataVenda } = require('../../dataReading/readVendas');

const re = /2019/;

const dataSales2019 = dataVenda.filter((item)=>{
    const date = item.data;
    if(re.test(date)){
        return item;
    }
});

const dataPurchases2019 = dataCompra.filter((item)=>{
    const date = item.data;
    if(re.test(date)){
        return item;
    }
});

const icms = dataPurchases2019.map((item)=> item.ICMS);
const totalIcms2019 = icms.reduce((previousValue, currentValue) => previousValue + currentValue).toFixed(2);

const st = dataPurchases2019.map((item)=> item.ST);
const totalSt2019 = st.reduce((previousValue, currentValue) => previousValue + currentValue).toFixed(2);

const sales = dataSales2019.map((item)=> item.total);
const totalSales2019 = sales.reduce((previousValue, currentValue) => previousValue + currentValue).toFixed(2);

const purchases = dataPurchases2019.map((item)=> item.total);
const totalPurchases2019 = purchases.reduce((previousValue, currentValue) => previousValue + currentValue).toFixed(2);

module.exports = {
    totalIcms2019,
    totalSt2019,
    totalSales2019,
    totalPurchases2019
}