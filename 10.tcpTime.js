const net = require("net");
const port = Number(process.argv[2]);

function fillZero(time) {
  return (time < 10 ? "0" : "") + time;
}
function formatDate() {
  const date = new Date();
  const formatedDate =
    date.getFullYear() +
    "-" +
    fillZero(date.getMonth() + 1) +
    "-" +
    fillZero(date.getDate()) +
    " " +
    fillZero(date.getHours()) +
    ":" +
    fillZero(date.getMinutes());
  return formatedDate;
}
const server = net.createServer(socket => {
  socket.end(formatDate() + "\n");
});
server.listen(port);
