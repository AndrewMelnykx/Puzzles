function stray(numbers) {
  const sortedNums = numbers.sort((a, b) => a - b);
  if (
    sortedNums[0] !== sortedNums[sortedNums.length - 1] &&
    sortedNums.length > 3
  ) {
    return sortedNums[0];
  } else {
    return sortedNums[sortedNums.length - 1];
  }
}

const result = stray([17, 17, 3, 17, 17, 17, 17]);
console.log(result);
