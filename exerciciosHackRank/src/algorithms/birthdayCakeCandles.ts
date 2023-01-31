const candles = [3, 2, 1, 3, 2, 3];

export function birthdayCakeCandles(arr: number[]): number {
  const max = Math.max(...arr);
  const count = arr.reduce((acc: number, curr: number) => {
    if (curr === max) acc += 1;

    return acc;
  }, 0);

  return count;
}

console.log(birthdayCakeCandles(candles));
