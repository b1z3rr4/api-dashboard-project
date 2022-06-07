const { totalIcms2021,
        totalSt2021,
        totalSales2021,
        totalPurchases2021 } = require('./data');

const totalIcms2021Format = parseInt(totalIcms2021).toLocaleString('pt-br', {minimumFractionDigits: 2});
const totalSt2021Format =  parseInt(totalSt2021).toLocaleString('pt-br', {minimumFractionDigits: 2});
const totalSales2021Format =  parseInt(totalSales2021).toLocaleString('pt-br', {minimumFractionDigits: 2});
const totalPurchases2021Fromat =  parseInt(totalPurchases2021).toLocaleString('pt-br', {minimumFractionDigits: 2});



const dataTable2021 = {
    ano: '2021',
    compras: `R$ ${totalPurchases2021Fromat}`,
    vendas: `R$ ${totalSales2021Format}`,
    ICMS: `R$ ${totalIcms2021Format}`,
    ST: `R$ ${totalSt2021Format}`
}

module.exports = {
    dataTable2021
}