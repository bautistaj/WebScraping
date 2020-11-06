const autoScroll = async (page) => {
  await page.evaluate(async () => {
      await new Promise((resolve, reject) => {
          var totalHeight = 0;
          var distance = 80;
          var timer = setInterval(() => {
              var scrollHeight = document.body.scrollHeight;
              window.scrollBy(0, distance);
              totalHeight += distance;

              if(totalHeight >= scrollHeight){
                  clearInterval(timer);
                  resolve();
              }
          }, 500);
      });
  });
}

const getData = async (browser, info) => {
  const page = await browser.newPage();
  
  await page.goto(info.url, {waitUntil: 'domcontentloaded'});
  await autoScroll(page);

  var data = await page.evaluate((info) => {
    const data = [];
    const allItems = document.querySelectorAll(info.identifiers.main);
    
    for(item of allItems){
      const price = item.querySelector(info.identifiers.price);
      const image = item.querySelector(info.identifiers.image);
      const title = document.querySelector(info.identifiers.title);
      const provider = info.provider;

      if(price && image && title){
        data.push({
          price: price.innerText,
          image: image.src,
          title: title.innerText,
          provider
        })
      }
    }

    return data;
  }, info);

  page.close();

  return data;
}

exports.autoScroll = autoScroll;
exports.getData = getData;