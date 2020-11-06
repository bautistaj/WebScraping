# WebScraping

Project to scrape web pages and implement NodeJS, MongoDB and NestJS.

# WebScraping Project
To scraping web pages, we need to configure using the next end-point pages.

Method: POST
>```
>http://localhost:3000/pages
>```
### Body (**raw**)

```json
{
    "url": "https://listado.mercadolibre.com.mx/running-shoes",
    "provider": "Mercado Libre",
    "identifiers": {
        "main": ".ui-search-result__wrapper",
        "image": ".slick-slide.slick-active img",
        "price": ".ui-search-price.ui-search-price--size-medium.ui-search-item__group__element .ui-search-price__second-line .price-tag .price-tag-fraction",
        "title": ".ui-search-item__group.ui-search-item__group--title h2"
    }
}
```

* url: page to scrap
* provider: Company where you obtain data
* identifiers: all class that we need to obtain the data.
  * main: class css to help to obtain the products
  * image: class css to obtain the image of the product
  * price: class css to obtain the price of the product
  * title: class css to obtain the title of the product

Once configurated the pages is necessary to configure the environment variables with the next values:

* DB_PORT
* DB_USER
* DB_PASSWORD
* DB_HOST
* DB_NAME
  

Import index.js from WebScraping/src/index.js.

```js
const scrapPages = require('./WebScraping/src');

scrapPages();
```

Once executed the Job you could obtain the data of the products saved.

Method: GET
>```
>http://localhost:3000/pages?offset=0&limit=5
>```
### Query Params

|Param|value|
|---|---|
|offset|0|
|limit|5|


# Api Project
Api Rest created with NestJS and MongoDB.

## Installation

```bash
$ npm install
```

Configure the environment variables of the api with next values:
* DB_URL: Data base url of mongo.
  
## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## End-point: Pages
### Description: Get all pages
Method: GET
>```
>http://localhost:3000/pages?offset=0&limit=5
>```
### Query Params

|Param|value|
|---|---|
|offset|0|
|limit|5|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃


## End-point: Create page
### Description: Get all pages
Method: POST
>```
>http://localhost:3000/pages
>```
### Body (**raw**)

```json
{
    "url": "https://listado.mercadolibre.com.mx/running-shoes",
    "provider": "Mercado Libre",
    "identifiers": {
        "main": ".ui-search-result__wrapper",
        "image": ".slick-slide.slick-active img",
        "price": ".ui-search-price.ui-search-price--size-medium.ui-search-item__group__element .ui-search-price__second-line .price-tag .price-tag-fraction",
        "title": ".ui-search-item__group.ui-search-item__group--title h2"
    }
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Get all products
### Description: Get all products
Method: GET
>```
>http://localhost:3000/products?offset=0&limit=5
>```
### Body (**raw**)

```json

```

### Query Params

|Param|value|
|---|---|
|offset|0|
|limit|5|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃


## End-point: Create product
### Description: Create product
Method: POST
>```
>http://localhost:3000/products
>```
### Body (**raw**)

```json
{
    "price": "1,299",
    "image": "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
    "title": "Fila Ray Tracer Blanco/negro",
    "provider": "Mercado Libre"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

_________________________________________________
Author: [bautistaj](https://github.com/bautistaj)

Package: [postman-to-markdown](https://github.com/bautistaj)

