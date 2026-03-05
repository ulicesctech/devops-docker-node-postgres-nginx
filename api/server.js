const express = require('express');
const { Client } = require('pg');

const app = express();
const port = 3000;

const client = new Client({
  host: process.env.DB_HOST || 'db',
  user: process.env.DB_USER || 'devuser',
  password: process.env.DB_PASSWORD || 'devpass',
  database: process.env.DB_NAME || 'devdb',
  port: Number(process.env.DB_PORT || 5432),
});

client.connect()
  .then(() => console.log('Connected to PostgreSQL'))
  .catch(err => console.error('DB connection error', err));

app.get('/', async (req, res) => {
  try {
    const result = await client.query('SELECT NOW()');
    res.json({
      message: 'DevOps Stack funcionando ',
      time: result.rows[0].now
    });
  } catch (err) {
    res.status(500).json({ error: 'DB error' });
  }
});

app.get('/health', (req, res) => res.send('OK'));

app.get('/hit', async (req, res) => {
  try {
    await client.query('INSERT INTO hits DEFAULT VALUES');
    const result = await client.query('SELECT COUNT(*) AS total FROM hits');
    res.json({ ok: true, total: Number(result.rows[0].total) });
  } catch (err) {
    res.status(500).json({ ok: false, error: 'DB error' });
  }
});

app.listen(port, () => console.log(`API running on port ${port}`));
