const { dataCompra } = require('../../../dataReading/readCompras');
const { dataVenda } = require('../../../dataReading/readVendas');

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

module.exports = {
    dataSales2020,
    dataPurchases2020
}