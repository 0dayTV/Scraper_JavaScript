// Change k_1337 to your API key
url = 'https://imdb-api.com/en/API/Ratings/k_1337/tt14153790'

fetch(url)
  .then((response) => response.json())
  .then((json) => console.log(json.fullTitle + ' IMDb RATING === ' + json.imDb))
