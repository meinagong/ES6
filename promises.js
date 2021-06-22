const url = 'https://jsonplaceholder.typicode.com/posts/';

fetch(url)
  .then(response => response.json())

// const promise = new Promise((resolve, reject) => {
//   reject();
// });


