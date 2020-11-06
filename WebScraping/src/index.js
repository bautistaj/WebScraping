const puppeteer = require('puppeteer');
const util = require('./util/util');
const { PageService, ProductService } = require('./service')

/**
 * Function to save data
 * @param {*} data 
 */
const saveData = async(data) => {
  productService = new ProductService();

  for (let index = 0; index < data.length; index++) {
    const product = data[index];
    const idProduct = await productService.create({ product });
  }
}

/**
 * Function to scrap pages defined in the collection pages of mongo database
 */
const scrapPages = async() => {
    const pageService = new PageService();
    const pages = await pageService.getAll();
    let allData = [];

    const browser = await puppeteer.launch({
        headless: true
    });

    for (let index = 0; index < pages.length; index++) {
      const data = await util.getData(browser, pages[index]);
      allData = [...allData, ...data];
    }
    await browser.close();

    return allData;
}

module.exports = scrapPages;

