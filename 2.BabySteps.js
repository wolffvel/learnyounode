const [, , ...rest] = process.argv;
let sum = 0;
rest.forEach(element => {
  sum += Number(element);
});
console.log(sum);
