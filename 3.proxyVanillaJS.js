let url = 'https://free-proxy-list.net/'
let regEx = /(\d{1,3}\.){3}\d{1,3}/gim

;(async () => {
  let response = await fetch(url)
  let res = await response.text()
  console.log(res.match(regEx))
})()
