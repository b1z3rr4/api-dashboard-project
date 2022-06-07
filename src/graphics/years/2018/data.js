const { dataCompra } = require('../../../dataReading/readCompras');
const { dataVenda } = require('../../../dataReading/readVendas');

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

module.exports = {
    dataSales2018,
    dataPurchases2018
}