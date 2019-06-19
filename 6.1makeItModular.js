const filter = require("./6.2module");
const dir = process.argv[2];
const extention = process.argv[3];

filter(dir, extention, (error, data) => {
  if (error) return console.log(error);

  data.forEach(file => {
    console.log(file);
  });
});
