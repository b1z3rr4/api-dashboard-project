const { dataCompra } = require('../../../dataReading/readCompras');
const { dataVenda } = require('../../../dataReading/readVendas');

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

module.exports = {
    dataSales2021,
    dataPurchases2021
}