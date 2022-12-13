arr = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005];

function aVeryBigSum(arr) {
  const sum = arr.reduce((acum, vlr) => {
    acum += vlr;
    return acum;
  });
  return sum;
}

console.log(aVeryBigSum(arr));
