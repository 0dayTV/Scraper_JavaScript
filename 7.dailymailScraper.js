// write next command into your terminal
// npm init -y
// npm install axios cheerio

const axios = require('axios')
const cheerio = require('cheerio')

const URL = 'https://www.dailymail.co.uk/home/index.html'
axios(url)
  .then((response) => {
    const html = response.data
    const $ = cheerio.load(html)
    const articles = []
    $('.linkro-darkred', html).each(function () {
      const title = $(this).text()
      const url = $(this).find('a').attr('href')
      const img = $(this).find('img').attr('src')
      articles.push({
        title,
        url,
        img,
      })
    })
    console.log(articles)
  })
  .catch((err) => console.log(err))
