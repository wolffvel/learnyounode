const fs = require("fs");
const dir = process.argv[2];
const extention = process.argv[3];

function printArray(array) {
  array.forEach(file => {
    console.log(file);
  });
}

fs.readdir(dir, (err, list) => {
  if (err) return console.log(err);
  const results = list.filter(file => file.includes("." + extention));
  printArray(results);
});
