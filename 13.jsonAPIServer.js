const http = require("http");
const url = require("url");
const port = process.argv[2];

const server = http.createServer((req, res) => {
  if (req.method === "GET") {
    const urlObject = url.parse(req.url, true);
    const urlPath = urlObject.pathname;
    const urlTime = urlObject.query.iso;

    if (urlPath === "/api/unixtime") {
      res.writeHead(200, { "Content-Type": "application/json" });
      const result = Date.parse(urlTime);
      res.end({ unixtime: result });
    } else if (urlPath === "/api/parsetime") {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(createDateObject(urlTime));
    }
  }
});
server.listen(port);

function createDateObject(time) {
  const date = new Date(Date.parse(time));
  return {
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds()
  };
}
