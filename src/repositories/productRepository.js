const pool = require('../config/database');
const Product = require('../models/product');

class ProductRepository {
  async findAll() {
    const [rows] = await pool.query('SELECT * FROM products');
    return rows.map(row => new Product(row.id, row.name, row.price, row.description));
  }

  async findById(id) {
    const [rows] = await pool.query('SELECT * FROM products WHERE id = ?', [id]);
    if (rows.length === 0) return null;
    const row = rows[0];
    return new Product(row.id, row.name, row.price, row.description);
  }

  async create(product) {
    const [result] = await pool.query(
      'INSERT INTO products (name, price, description) VALUES (?, ?, ?)',
      [product.name, product.price, product.description]
    );
    return new Product(result.insertId, product.name, product.price, product.description);
  }

  async update(id, product) {
    await pool.query(
      'UPDATE products SET name = ?, price = ?, description = ? WHERE id = ?',
      [product.name, product.price, product.description, id]
    );
    return this.findById(id);
  }

  async delete(id) {
    await pool.query('DELETE FROM products WHERE id = ?', [id]);
  }
}

module.exports = new ProductRepository();