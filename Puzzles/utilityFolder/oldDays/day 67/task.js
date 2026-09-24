function findOutlier(integers) {
  const isEven = integers.filter((n) => n % 2 === 0);
  const isOdd = integers.filter((n) => n % 2 !== 0);
  return isEven.length === 1 ? isEven[0] : isOdd[0];
}
const result = [2, 4, 0, 100, 4, 11, 2602, 36];
console.log(result);
