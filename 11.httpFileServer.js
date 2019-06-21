const http = require("http");
const fs = require("fs");
const [, , port, path] = process.argv;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "text/plain" });
  fs.createReadStream(path).pipe(res);
});

server.listen(port);
