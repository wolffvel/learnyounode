const bl = require("bl");
const http = require("http");
const url = process.argv[2];

http.get(url, res => {
  res.pipe(
    bl((err, data) => {
      if (err) return console.log(err);
      const stream = data.toString();
      console.log(stream.length);
      console.log(stream);
    })
  );
});
