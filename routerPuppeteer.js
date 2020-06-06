const express = require('express');
const path = require('path');
const routerPuppeteer = express.Router();
const puppeteer = require('puppeteer')

const htmlFile = path.resolve("./test.html");

async function printPDF() {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto("file://" + htmlFile, {waitUntil: 'networkidle0'});
  const pdf = await page.pdf({ format: 'A4' });
 
  await browser.close();
  return pdf
}

routerPuppeteer.get('/', (req, res) => {
  printPDF().then(pdf => {
    res.set({ 'Content-Type': 'application/pdf', 'Content-Length': pdf.length })
    res.send(pdf)
  })
});

module.exports = routerPuppeteer