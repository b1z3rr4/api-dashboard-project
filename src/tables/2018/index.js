const { totalIcms2018,
        totalSt2018,
        totalSales2018,
        totalPurchases2018 } = require('./data');


const totalIcms2018Format = parseInt(totalIcms2018).toLocaleString('pt-br', {minimumFractionDigits: 2});
const totalSt2018Format =  parseInt(totalSt2018).toLocaleString('pt-br', {minimumFractionDigits: 2});
const totalSales2018Format =  parseInt(totalSales2018).toLocaleString('pt-br', {minimumFractionDigits: 2});
const totalPurchases2018Fromat =  parseInt(totalPurchases2018).toLocaleString('pt-br', {minimumFractionDigits: 2});



const dataTable2018 = {
    ano: '2018',
    compras: `R$ ${totalPurchases2018Fromat}`,
    vendas: `R$ ${totalSales2018Format}`,
    ICMS: `R$ ${totalIcms2018Format}`,
    ST: `R$ ${totalSt2018Format}`
}

module.exports = {
    dataTable2018
}