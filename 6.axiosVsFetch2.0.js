// axios
axios
  .get('https://jsonplaceholder.typicode.com/posts', {
    timeout: 10,
  })
  .then((response) => console.log(response))

// fetch
let controller = new AbortController()
let timeoutValue = 10000
let timeout = setTimeout(() => controller.abort(), timeoutValue)
fetch('https://jsonplaceholder.typicode.com/posts', {
  signal: controller.signal,
})
  .then((response) => response.json())
  .then((data) => console.log(data))
