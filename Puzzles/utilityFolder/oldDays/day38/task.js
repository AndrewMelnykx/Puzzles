function findOdd(arr) {
  return arr.reduce((acc, curr) => acc ^ curr, 0);
}
