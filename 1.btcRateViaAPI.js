let url = 'https://api.kriptomat.io/public/prices/'

fetch(url)
  .then((response) => response.json())
  .then((json) => console.log(json.data.btc.price + ' $'))
// the same thing as
;(async () => {
  let response = await fetch(url)
  price = await response.json()
  console.log(price.data.btc.price + ' $')
})()
