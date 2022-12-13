/**
 00 01 02
 10 11 12
 20 21 22
 */

arr = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
];

// Na raça
function diagonalDifference(arr) {
  let dimension = arr.length;
  let primaryDiagonal = [];
  let secondaryDiagonal = [];

  for (let i = 0; i < dimension; i++) {
    for (let j = 0; j < dimension; j++) {
      if (i === j) primaryDiagonal.push(arr[i][j]);
      if (i + j === dimension - 1) secondaryDiagonal.push(arr[i][j]);
    }
  }

  let sumPrimary = primaryDiagonal.reduce((acc, cur) => {
    acc += cur;
    return acc;
  });

  let sumSecondary = secondaryDiagonal.reduce((acc, cur) => {
    acc += cur;
    return acc;
  });

  return Math.abs(sumPrimary - sumSecondary);
}

// Na elegância
function diagonalDifference1(arr) {
  let dimension = arr.length - 1;
  let sumone = 0;
  let sumtwo = 0;

  arr.forEach((ele, ind, arr) => {
    sumone += ele[ind];
    sumtwo += ele[dimension - ind];
  });
  return Math.abs(sumone - sumtwo);
}
