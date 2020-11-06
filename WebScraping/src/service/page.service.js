const MongoLib = require('./../mongo-client/index');

class PageService {
  constructor(){
    this.collection = 'pages'
    this.mongoDb = new MongoLib();
  }

  async create ({ page }) {
    console.log(this.collection);
    console.log(page);
    const id = await this.mongoDb.create(this.collection, page)
    return id
  }

  async getAll (query = {}, limit = 50) {
    const list = await this.mongoDb.getAll(this.collection, query, limit)
    return list || []
  }
}

module.exports = PageService