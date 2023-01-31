const arr = [-4, 3, -9, 0, 4, 1];

function plusMinus(arr) {
  const positive = arr.filter((num) => num > 0).length / arr.length;
  const negative = arr.filter((num) => num < 0).length / arr.length;
  const zero = arr.filter((num) => num === 0).length / arr.length;

  console.log(positive.toPrecision(6));
  console.log(negative.toPrecision(6));
  console.log(zero.toPrecision(6));
}

plusMinus(arr);
