const { totalIcms2019,
        totalSt2019,
        totalSales2019,
        totalPurchases2019 } = require('./data');


const totalIcms2019Format = parseInt(totalIcms2019).toLocaleString('pt-br', {minimumFractionDigits: 2});
const totalSt2019Format =  parseInt(totalSt2019).toLocaleString('pt-br', {minimumFractionDigits: 2});
const totalSales2019Format =  parseInt(totalSales2019).toLocaleString('pt-br', {minimumFractionDigits: 2});
const totalPurchases2019Fromat =  parseInt(totalPurchases2019).toLocaleString('pt-br', {minimumFractionDigits: 2});



const dataTable2019 = {
    ano: '2019',
    compras: `R$ ${totalPurchases2019Fromat}`,
    vendas: `R$ ${totalSales2019Format}`,
    ICMS: `R$ ${totalIcms2019Format}`,
    ST: `R$ ${totalSt2019Format}`
}

module.exports = {
    dataTable2019
}