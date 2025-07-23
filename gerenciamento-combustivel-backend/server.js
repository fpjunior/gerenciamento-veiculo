const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// Permitir requisições do frontend Angular
app.use(cors({ origin: 'http://localhost:4200', credentials: true }));

app.use(express.json());

// Rotas
app.use('/vehicles', require('./routes/vehicle'));
app.use('/drivers', require('./routes/driver'));
app.use('/trips', require('./routes/trip'));

app.get('/', (req, res) => {
  res.send('API Gerenciamento de Combustível rodando!');
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
