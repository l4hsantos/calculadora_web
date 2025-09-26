const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Teste');
});

app.post('/teste', (req, res) => {
    res.send('Teste2');
});

app.get('/teste', (req, res) => {
    res.send('Teste3');
});

const estudantes = [
    { id: 1, nome: "Laís", idade: 18 },
    { id: 2, nome: "Kelven", idade: 20 },
    { id: 3, nome: "Davi", idade: 19 },
    { id: 4, nome: "Emanuele", idade: 21 },
    { id: 5, nome: "Kaio", idade: 22 },
    { id: 6, nome: "Ana", idade: 23 },
    { id: 7, nome: "Sabrina", idade: 20 },
];


app.get('/estudante/:id', (req, res) => {
    let id = parseInt(req.params.id);

    let estudante = estudantes.find(e => e.id === id);

    if (estudante) {
        res.send(`Nome: ${estudante.nome}, Idade: ${estudante.idade}`);
    } else {
        res.send("Estudante não encontrado.");
    }
});

app.get('/estudantes', (req, res) => {
    res.json(estudantes);
});

app.listen(3005, () => {
    console.log('Servidor em execução: http://localhost:3005');
});