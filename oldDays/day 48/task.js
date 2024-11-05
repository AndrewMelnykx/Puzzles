function findUniq(arr) {
  const filteredArr = arr.sort((a, b) => a - b);
  const filteredArrLast = filteredArr.length - 1;
  return filteredArr[0] === filteredArr[1]
    ? filteredArr[filteredArrLast]
    : filteredArr[0];
}
const result = findUniq([1, 1, 1, 2, 1, 1]);
console.log(result);
