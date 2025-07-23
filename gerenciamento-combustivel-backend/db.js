const { Pool } = require('pg');

const pool = new Pool({
  user: 'user',
  host: 'localhost',
  database: 'gerenciamento_combustivel',
  password: 'password',
  port: 5433 // Porta do novo container
});

module.exports = pool;
