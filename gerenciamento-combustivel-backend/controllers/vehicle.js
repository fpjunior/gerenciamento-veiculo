
const pool = require('../db');

exports.list = async (req, res) => {
  const pool = require('../db');
  try {
    const result = await pool.query('SELECT * FROM vehicles ORDER BY id DESC');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao buscar veículos' });
  }
};

exports.create = async (req, res) => {
  const { nome, placa, vinculo, vinculoDescricao, tipoCombustivel } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO vehicles (nome, placa, vinculo, vinculo_descricao, tipo_combustivel) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [nome, placa, vinculo, vinculoDescricao, tipoCombustivel]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao cadastrar veículo' });
  }
};

exports.get = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM vehicles WHERE id = $1', [req.params.id]);
    if (result.rows.length === 0) return res.status(404).json({ error: 'Veículo não encontrado' });
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao buscar veículo' });
  }
};

exports.update = async (req, res) => {
  const { nome, placa, vinculo, vinculoDescricao, tipoCombustivel } = req.body;
  try {
    const result = await pool.query(
      'UPDATE vehicles SET nome = $1, placa = $2, vinculo = $3, vinculo_descricao = $4, tipo_combustivel = $5 WHERE id = $6 RETURNING *',
      [nome, placa, vinculo, vinculoDescricao, tipoCombustivel, req.params.id]
    );
    if (result.rows.length === 0) return res.status(404).json({ error: 'Veículo não encontrado' });
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao atualizar veículo' });
  }
};

exports.remove = async (req, res) => {
  try {
    const result = await pool.query('DELETE FROM vehicles WHERE id = $1', [req.params.id]);
    res.status(204).end();
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao remover veículo' });
  }
};
