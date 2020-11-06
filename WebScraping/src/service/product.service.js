const MongoLib = require('./../mongo-client/index');

class PageService {
  constructor(){
    this.collection = 'products'
    this.mongoDb = new MongoLib();
  }

  async create ({ product }) {
    const id = await this.mongoDb.create(this.collection, product)
    return id
  }

  async getAll (query = {}, limit = 50) {
    const list = await this.mongoDb.getAll(this.collection, query, limit)
    return list || []
  }
}

module.exports = PageService