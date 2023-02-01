function countApplesAndOranges(
  s: number,
  t: number,
  a: number,
  b: number,
  apples: number[],
  oranges: number[],
): void {
  function callbackFn(position: number): number {
    let count = 0;

    if (position >= a && position <= b) count += 1;

    return count;
  }

  const applesDistance = apples.map((index) => a + index);
  const orangessDistance = oranges.map((index) => b + index);
  console.log(
    applesDistance.reduce((orangesCount, curr) => {
      if (curr >= s && curr <= t) {
        orangesCount += 1;
      }

      return orangesCount;
    }, 0),
  );

  console.log(
    orangessDistance.reduce((applesCount, curr) => {
      if (curr >= s && curr <= t) {
        applesCount += 1;
      }

      return applesCount;
    }, 0),
  );
}

countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]);
