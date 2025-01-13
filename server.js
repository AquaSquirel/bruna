const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;

// Middleware para servir arquivos estáticos
app.use('/cartinha', express.static(path.join(__dirname, 'cartinha')));

app.get('/', (req, res) => {
  const filePath = path.join(__dirname, 'index.html');
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Erro ao ler o arquivo HTML');
      return;
    }
    res.send(data);
  });
});

app.get('/cartinha/style.css', (req, res) => {
  const filePath = path.join(__dirname, 'cartinha', 'style.css');
  res.sendFile(filePath);
});

app.get('/cartinha/script.js', (req, res) => {
  const filePath = path.join(__dirname, 'cartinha', 'script.js');
  res.sendFile(filePath);
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});