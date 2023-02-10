// npm install axios [write this command into your terminal]
// more about axios -- https://www.npmjs.com/package/axios --

let url = 'https://jsonplaceholder.typicode.com/posts'
// Axios
axios.get(url).then((response) => console.log(response))
// Fetch
fetch(url)
  .then((response) => response.json())
  .then((data) => console.log(data))
