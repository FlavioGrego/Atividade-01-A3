const clientRepository = require('../repositories/clientRepository');
const Client = require('../models/client');

class ClientService {
  async getAllClients() {
    return await clientRepository.findAll();
  }

  async getClientById(id) {
    const client = await clientRepository.findById(id);
    if (!client) throw new Error('Cliente não encontrado!');
    return client;
  }

  async createClient(data) {
    if (!data.name || !data.email) throw new Error('Nome e email são obrigatórios!');
    const client = new Client(null, data.name, data.email, data.phone);
    return await clientRepository.create(client);
  }

  async updateClient(id, data) {
    const client = await clientRepository.findById(id);
    if (!client) throw new Error('Cliente não encontrado!');
    const updatedClient = new Client(id, data.name || client.name, data.email || client.email, data.phone || client.phone);
    return await clientRepository.update(id, updatedClient);
  }

  async deleteClient(id) {
    const client = await clientRepository.findById(id);
    if (!client) throw new Error('Cliente não encontrado!');
    await clientRepository.delete(id);
  }
}

module.exports = new ClientService();