const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/', (req, res) => {
    setTimeout(() => {
        res.json([
            {
                mensagem: 'Hi honey',
                visualizado: true,
                remetente: false,
            },
            {
                mensagem: 'You dont love me anymore?',
                visualizado: true,
                remetente: false,
            },
            {
                mensagem: 'No',
                visualizado: false,
                remetente: true,
            },
            {
                mensagem: 'Cry',
                visualizado: false,
                remetente: true,
            },
            {
                mensagem: 'Bitch',
                visualizado: false,
                remetente: true,
            },
        ]);
    }, 1000);
});

app.listen(8080, () => {
    console.log('Servidor rodando');
});