const http = require("http");
const bl = require("bl");
const [, , ...urls] = process.argv;
const responses = [];

function fetchData(url) {
  return new Promise((resolve, reject) => {
    http.get(url, res => {
      res.pipe(
        bl((err, data) => {
          if (err) return reject(console.log(err));
          const stream = data.toString();
          resolve(stream);
        })
      );
    });
  });
}
urls.forEach(url => {
  responses.push(fetchData(url));
});

Promise.all(responses).then(values => {
  values.forEach(answer => console.log(answer));
});
