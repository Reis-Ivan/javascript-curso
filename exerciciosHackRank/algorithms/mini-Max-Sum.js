const arr = [1, 2, 3, 4, 5];

const newArr = arr.sort((a, b) => a - b);

const maximum = newArr.slice(1).reduce((acum, vlr) => {
  acum += vlr;
  return acum;
});

const minimun = newArr.slice(0, 4).reduce((acum, vlr) => {
  acum += vlr;
  return acum;
});

console.log(minimun, maximum);
