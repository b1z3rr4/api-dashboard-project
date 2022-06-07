const { totalIcms2020,
        totalSt2020,
        totalSales2020,
        totalPurchases2020 } = require('./data');


const totalIcms2020Format = parseInt(totalIcms2020).toLocaleString('pt-br', {minimumFractionDigits: 2});
const totalSt2020Format =  parseInt(totalSt2020).toLocaleString('pt-br', {minimumFractionDigits: 2});
const totalSales2020Format =  parseInt(totalSales2020).toLocaleString('pt-br', {minimumFractionDigits: 2});
const totalPurchases2020Fromat =  parseInt(totalPurchases2020).toLocaleString('pt-br', {minimumFractionDigits: 2});



const dataTable2020 = {
    ano: '2020',
    compras: `R$ ${totalPurchases2020Fromat}`,
    vendas: `R$ ${totalSales2020Format}`,
    ICMS: `R$ ${totalIcms2020Format}`,
    ST: `R$ ${totalSt2020Format}`
}

module.exports = {
    dataTable2020
}