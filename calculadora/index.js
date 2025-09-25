const express = require('express');
const app = express();
const port = 3000;


app.get('/adicao/:param1/:param2', (req, res) => {
const { param1, param2 } = req.params;
const resultado = Number(param1) + Number(param2);
res.send(`Resultado da adição: ${resultado}`);
});


app.get('/subtracao/:param1/:param2', (req, res) => {
const { param1, param2 } = req.params;
const resultado = Number(param1) - Number(param2);
res.send(`Resultado da subtração: ${resultado}`);
});

app.get('/multiplicacao/:param1/:param2', (req, res) => {
const { param1, param2 } = req.params;
const resultado = Number(param1) * Number(param2);
res.send(`Resultado da multiplicação: ${resultado}`);
}


app.get('/divisao/:param1/:param2', (req, res) => {
const { param1, param2 } = req.params; 
const resultado = Number(param1) / Number(param2);
res.send(`Resultado da divisão: ${resultado}`);
}

app.listen(port, () => {
console.log(`Servidor rodando em http://localhost:${port}`);
});
