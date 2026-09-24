let numbers = [1, 2, 3, 4];
let target = 3;

class Solution {
  /**
   * @param {number[]} numbers
   * @param {number} target
   * @return {number[]}
   */
  twoSum(numbers, target) {
    let left = 0;
    let right = numbers.length - 1;
    while (left < right) {
      let sum = numbers[left] + numbers[right];
      if (sum === target) {
        return [numbers[left], numbers[right]];
      } else if (sum !== target) {
        left++;
      } else {
        right--;
      }
    }
  }
}

class Solution {
  twoSum(numbers, target) {
    let left = 0;
    let right = numbers.length - 1;
    while (left < right) {
      let sum = numbers[left] + numbers[right];
      if (sum === target) {
        return [numbers[left], numbers[right]];
      } else if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
  }
}

let solution = new Solution();
let result = solution.twoSum(numbers, target);

console.log(result);
