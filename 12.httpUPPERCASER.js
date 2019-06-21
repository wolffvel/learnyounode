const map = require("through2-map");
const http = require("http");
const port = process.argv[2];

const server = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "text/plain" });
  if (req.method === "POST") {
    req
      .pipe(
        map(data => {
          return data.toString().toUpperCase();
        })
      )
      .pipe(res);
  }
});
server.listen(port);
