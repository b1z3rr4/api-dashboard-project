const { dataCompra } = require('../../../dataReading/readCompras');
const { dataVenda } = require('../../../dataReading/readVendas');

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

module.exports = {
    dataSales2019,
    dataPurchases2019
}