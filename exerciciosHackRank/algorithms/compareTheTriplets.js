a = [17, 28, 30];
b = [99, 16, 8];

function compareTriplets(a, b) {
  let aScore = 0;
  let bScore = 0;

  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) aScore++;
    else if (b[i] > a[i]) bScore++;
  }

  let results = [aScore, bScore];
  return results;
}

console.log(compareTriplets(a, b));
