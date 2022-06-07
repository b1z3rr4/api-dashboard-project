const { dataCompra } = require('../../../dataReading/readCompras');
const { dataVenda } = require('../../../dataReading/readVendas');

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

module.exports = {
    dataSales2017,
    dataPurchases2017
}