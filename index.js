const express = require('express');
const cors = require('cors');
const agendamentosRouter = require('./agendamentos');
const db = require('./db');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/agendamentos', agendamentosRouter);

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
