function highAndLow(numbers) {
  const sortedArr = numbers
    .match(/-?\d+/g)
    .map(Number)
    .sort((a, b) => a - b);
  return [sortedArr[sortedArr.length - 1], sortedArr[0]].join(" ");
}

const result = highAndLow("1 9 3 4 -5");
console.log(result);
