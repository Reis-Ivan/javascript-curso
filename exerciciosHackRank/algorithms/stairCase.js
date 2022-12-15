const num = 6;
function stairCase(num) {
  for (let i = 1; i <= num; i += 1) {
    console.log(' '.repeat(num - i) + '#'.repeat(i));
  }
}

stairCase(num);
