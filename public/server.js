const PORT = 3003;
const cors = require('cors');
const express = require('express');
const app = express();

const { dataCard }  = require('../src/cards/index.js');

app.use(express.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", 'GET');
    app.use(cors());
    next();
});

app.get('/cards', (req, res, next) => {
    res.send( dataCard );
});

const { data2017 } = require('../src/graphics/years/2017/index');
const { data2018 } = require('../src/graphics/years/2018/index');
const { data2019 } = require('../src/graphics/years/2019/index');
const { data2020 } = require('../src/graphics/years/2020/index');
const { data2021 } = require('../src/graphics/years/2021/index');

const mapAllG = {
    2017: data2017,
    2018: data2018,
    2019: data2019,
    2020: data2020,
    2021: data2021
};

app.get('/graphics/:year', (req, res, next) => {
    const year = req.params.year;
    res.send( mapAllG[year] );
});

app.get('/graphics/', (req, res, next) => {
    res.send( mapAllG);
});

const { dataTable2017 } = require('../src/tables/2017/index');
const { dataTable2018 } = require('../src/tables/2018/index');
const { dataTable2019 } = require('../src/tables/2019/index');
const { dataTable2020 } = require('../src/tables/2020/index');
const { dataTable2021 } = require('../src/tables/2021/index');

const mapAllT = {
    2017: dataTable2017,
    2018: dataTable2018,
    2019: dataTable2019,
    2020: dataTable2020,
    2021: dataTable2021
};

app.get('/tables/:year', (req, res, next) => {
    const year = req.params.year;
    res.send( mapAllT[year] );
});

app.get('/tables/', (req, res, next) => {
    res.send(mapAllT);
});

app.listen(PORT, ()=>{
    console.log('Server onload...');
})