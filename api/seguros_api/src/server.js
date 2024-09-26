const express = require('express');
const { Client } = require('pg');
const app = express();
const port = 3002;

const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'seguros_inst_db',
  password: 'admin',
  port: 5432,
});

client.connect();

app.get('/api/tu_tabla', async (req, res) => {
  try {
    const result = await client.query('SELECT * FROM vehiculos');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error al obtener los datos');
  }
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
