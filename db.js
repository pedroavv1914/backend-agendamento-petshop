const sqlite3 = require('sqlite3').verbose();
const DBSOURCE = 'agendamentos.db';

const db = new sqlite3.Database(DBSOURCE, (err) => {
  if (err) {
    console.error('Erro ao conectar no banco:', err.message);
    throw err;
  } else {
    db.run(`CREATE TABLE IF NOT EXISTS agendamentos (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nome_pet TEXT NOT NULL,
      nome_tutor TEXT NOT NULL,
      servico TEXT NOT NULL,
      data TEXT NOT NULL,
      horario TEXT NOT NULL
    )`);
    console.log('Banco conectado e pronto.');
  }
});

module.exports = db;
