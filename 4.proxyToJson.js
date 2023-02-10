const fs = require('fs')
let file_name = 'data.json'

let url = 'https://free-proxy-list.net/'
let regEx = /(\d{1,3}\.){3}\d{1,3}/gim
let proxy
fetch(url)
  .then((response) => response.text())
  .then((text) => (proxy = text.match(regEx)))
  .then((proxy) =>
    fs.writeFile(
      file_name,
      JSON.stringify(proxy),
      (err) => err && console.error(err)
    )
  )
