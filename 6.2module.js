const fs = require("fs");

function readFile(dir, extention, callback) {
  fs.readdir(dir, (err, list) => {
    if (err) return callback(err);
    const results = list.filter(file => file.includes("." + extention));
    callback(null, results);
  });
}

module.exports = readFile;
