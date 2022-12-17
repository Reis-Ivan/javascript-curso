const candles = [3, 2, 1, 3, 2, 3];

function birthdayCakeCandles(arr) {
  const max = Math.max(...arr);
  const count = arr.reduce((acc, curr) => {
    if (curr === max) acc += 1;

    return acc;
  }, 0);

  return count;
}

console.log(birthdayCakeCandles(candles));
