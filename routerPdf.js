const express = require('express');
const pdf = require('html-pdf');
const routerPdf = express.Router();

const content = `
<h1>Título en el PDF creado con el paquete html-pdf</h1>
<p>Generando un PDF con un HTML sencillo</p>
`;

routerPdf.get('/', (req, res) => {
  pdf.create(content).toStream(function(err, stream){
    if (err) return res.end(err.stack)
    res.setHeader('Content-Type', 'application/pdf')
    stream.pipe(res);
  });
});

module.exports = routerPdf
