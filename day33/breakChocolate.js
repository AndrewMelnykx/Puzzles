function breakChocolate(n, m) {
  if (n === 0 || m === 0) {
    return 0;
  }
  return n * m - 1;
}

const result = breakChocolate(1, 5);
console.log(result);
