const x = [17, 28, 30];
const y = [99, 16, 8];

function compareTriplets(varA: number[], varB: number[]): number[] {
  let aScore = 0;
  let bScore = 0;

  for (let i = 0; i < varA.length; i += 1) {
    if (varA[i] > varB[i]) aScore += 1;
    else if (varB[i] > varA[i]) bScore += 1;
  }

  const results = [aScore, bScore];
  return results;
}

console.log(compareTriplets(x, y));
