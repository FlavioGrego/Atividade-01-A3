const pool = require('../config/database');
const Client = require('../models/client');

class ClientRepository {
  async findAll() {
    const [rows] = await pool.query('SELECT * FROM clients');
    return rows.map(row => new Client(row.id, row.name, row.email, row.phone));
  }

  async findById(id) {
    const [rows] = await pool.query('SELECT * FROM clients WHERE id = ?', [id]);
    if (rows.length === 0) return null;
    const row = rows[0];
    return new Client(row.id, row.name, row.email, row.phone);
  }

  async create(client) {
    const [result] = await pool.query(
      'INSERT INTO clients (name, email, phone) VALUES (?, ?, ?)',
      [client.name, client.email, client.phone]
    );
    return new Client(result.insertId, client.name, client.email, client.phone);
  }

  async update(id, client) {
    await pool.query(
      'UPDATE clients SET name = ?, email = ?, phone = ? WHERE id = ?',
      [client.name, client.email, client.phone, id]
    );
    return this.findById(id);
  }

  async delete(id) {
    await pool.query('DELETE FROM clients WHERE id = ?', [id]);
  }
}

module.exports = new ClientRepository();