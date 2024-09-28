function twoSum(numbers, target) {
  const map = {};

  for (let i = 0; i < numbers.length; i++) {
    const complement = target - numbers[i];

    if (map.hasOwnProperty(complement)) {
      return [map[complement], i];
    }

    map[numbers[i]] = i;
  }
  return null;
}
const result = twoSum([1, 2, 3], 4);
console.log(result);
