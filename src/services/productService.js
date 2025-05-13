const productRepository = require('../repositories/productRepository');
const Product = require('../models/product');

class ProductService {
  async getAllProducts() {
    return await productRepository.findAll();
  }

  async getProductById(id) {
    const product = await productRepository.findById(id);
    if (!product) throw new Error('Produto não encontrado!');
    return product;
  }

  async createProduct(data) {
    if (!data.name || !data.price) throw new Error('Nome e preço são obrigatórios!');
    const product = new Product(null, data.name, data.price, data.description);
    return await productRepository.create(product);
  }

  async updateProduct(id, data) {
    const product = await productRepository.findById(id);
    if (!product) throw new Error('Produto não encontrado!');
    const updatedProduct = new Product(id, data.name || product.name, data.price || product.price, data.description || product.description);
    return await productRepository.update(id, updatedProduct);
  }

  async deleteProduct(id) {
    const product = await productRepository.findById(id);
    if (!product) throw new Error('Produto não encontrado!');
    await productRepository.delete(id);
  }
}

module.exports = new ProductService();