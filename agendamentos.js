const express = require('express');
const router = express.Router();
const db = require('./db');

// Função para determinar o período do dia
function getPeriodo(horario) {
  const [h, m] = horario.split(':').map(Number);
  if (h >= 6 && (h < 12 || (h === 11 && m <= 59))) return 'manhã';
  if (h >= 12 && (h < 18 || (h === 17 && m <= 59))) return 'tarde';
  return 'noite';
}

// Adicionar novo agendamento
router.post('/', (req, res) => {
  const { nome_pet, nome_tutor, servico, data, horario } = req.body;
  if (!nome_pet || !nome_tutor || !servico || !data || !horario) {
    return res.status(400).json({ error: 'Campos obrigatórios faltando.' });
  }
  const sql = 'INSERT INTO agendamentos (nome_pet, nome_tutor, servico, data, horario) VALUES (?, ?, ?, ?, ?)';
  db.run(sql, [nome_pet, nome_tutor, servico, data, horario], function(err) {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ id: this.lastID, nome_pet, nome_tutor, servico, data, horario });
  });
});

// Listar agendamentos por data e período
router.get('/', (req, res) => {
  const { data } = req.query;
  let sql = 'SELECT * FROM agendamentos';
  let params = [];
  if (data) {
    sql += ' WHERE data = ?';
    params.push(data);
  }
  db.all(sql, params, (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    // Agrupar por período
    const periodos = { manhã: [], tarde: [], noite: [] };
    rows.forEach(ag => {
      const periodo = getPeriodo(ag.horario);
      periodos[periodo].push(ag);
    });
    res.json([
      { periodo: 'manhã', agendamentos: periodos.manha || periodos["manhã"] },
      { periodo: 'tarde', agendamentos: periodos.tarde },
      { periodo: 'noite', agendamentos: periodos.noite }
    ]);
  });
});

// Excluir agendamento
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  db.run('DELETE FROM agendamentos WHERE id = ?', [id], function(err) {
    if (err) return res.status(500).json({ error: err.message });
    if (this.changes === 0) return res.status(404).json({ error: 'Agendamento não encontrado.' });
    res.json({ ok: true });
  });
});

module.exports = router;
