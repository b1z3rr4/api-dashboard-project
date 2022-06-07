const { totalICMS } = require('./icms/index');
const { totalPurchases } = require('./purchases/index');
const { totalSales } = require('./sales/index');
const { totalST } = require('./st/index');

const icmsFormat = parseInt(totalICMS).toLocaleString('pt-br', {minimumFractionDigits: 2});
const purchasesFormat = parseInt(totalPurchases).toLocaleString('pt-br', {minimumFractionDigits: 2});
const salesFormat = parseInt(totalSales).toLocaleString('pt-br', {minimumFractionDigits: 2});
const stFormat = parseInt(totalST).toLocaleString('pt-br', {minimumFractionDigits: 2});

const dataCard = [
    {
        tag: "COMPRAS",
        valor: `R$ ${purchasesFormat}`
    },
    {
        tag: "VENDAS",
        valor: `R$ ${salesFormat}`
    },
    {
        tag: "ICMS",
        valor: `R$ ${icmsFormat}`
    },
    {
        tag: "ST",
        valor: `R$ ${stFormat}`
    },
];

module.exports = {
    dataCard
}