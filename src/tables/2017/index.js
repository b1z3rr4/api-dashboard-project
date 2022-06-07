const { totalIcms2017,
        totalSt2017,
        totalSales2017,
        totalPurchases2017 } = require('./data');

const totalIcms2017Format = parseInt(totalIcms2017).toLocaleString('pt-br', {minimumFractionDigits: 2});
const totalSt2017Format =  parseInt(totalSt2017).toLocaleString('pt-br', {minimumFractionDigits: 2});
const totalSales2017Format =  parseInt(totalSales2017).toLocaleString('pt-br', {minimumFractionDigits: 2});
const totalPurchases2017Fromat =  parseInt(totalPurchases2017).toLocaleString('pt-br', {minimumFractionDigits: 2});



const dataTable2017 = {
    ano: '2017',
    compras: `R$ ${totalPurchases2017Fromat}`,
    vendas: `R$ ${totalSales2017Format}`,
    ICMS: `R$ ${totalIcms2017Format}`,
    ST: `R$ ${totalSt2017Format}`
}

module.exports = {
    dataTable2017
}