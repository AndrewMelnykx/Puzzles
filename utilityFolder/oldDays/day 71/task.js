function pipeFix(numbers) {
  const sortedNums = numbers.sort((a, b) => a - b);
  const resultArr = [];
  for (let i = sortedNums[0]; i <= sortedNums[sortedNums.length - 1]; i++) {
    resultArr.push(i);
  }
  return resultArr;
}

const result = pipeFix([1, 2, 3, 12]);
console.log(result);
