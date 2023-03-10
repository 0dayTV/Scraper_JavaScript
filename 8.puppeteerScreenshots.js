// write next command into your terminal
// npm init -y
// npm i puppeteer

const puppeteer = require('puppeteer')
const fs = require('fs')

const URL = 'https://github.com/'
;(async () => {
  const dir = './screens'

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir)
  }

  const browser = await puppeteer.launch({
    headless: true,
    ignoreHTTPSErrors: true,
  })
  const page = await browser.newPage()
  page.setViewport({
    width: 1920,
    height: 1080,
  })
  await page.goto(URL, {
    timeout: 30000,
  })
  await page.screenshot({ path: 'screens/example.png' })
  await page.screenshot({ path: 'screens/fullpage.png', fullPage: true })
  await browser.close()
})()
