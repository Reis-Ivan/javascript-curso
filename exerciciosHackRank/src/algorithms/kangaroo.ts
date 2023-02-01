function kangaroo(x1: number, v1: number, x2: number, v2: number): string {
  return v1 > v2 && (x2 - x1) % (v1 - v2) === 0 ? 'YES' : 'NO';
}

console.log(kangaroo(0, 3, 4, 2));
console.log(kangaroo(0, 2, 5, 3));
console.log(kangaroo(2, 6, 10, 2));
console.log(kangaroo(12, 12, 0, 12));
