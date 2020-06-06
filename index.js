const express = require('express');
const app = express();

const routerPdf = require('./routerPdf');
const routerPuppeteer = require('./routerPuppeteer');

app.use('/pdf', routerPdf);
app.use('/puppeteer', routerPuppeteer);

app.use(express.static('public'));
app.use('/static', express.static(__dirname + '/public'));

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`[App]: Listening on port ${port}`);
});

