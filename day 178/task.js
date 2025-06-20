let numbers = [1, 2, 3, 4];
let target = 3;

class Solution {
  /**
   * @param {number[]} numbers
   * @param {number} target
   * @return {number[]}
   */
  twoSum(numbers, target) {
    for (let i = 0; i < numbers.length; i++) {
      for (let j = i + 1; j < numbers.length; j++) {
        if (numbers[i] + numbers[j] === target) {
          return [i + 1, j + 1];
        }
      }
    }
  }
}

let solution = new Solution();
let result = solution.twoSum(numbers, target);

console.log(result);
