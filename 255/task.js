let numbers = [2, 7, 11, 15];
let target = 9;

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function (numbers, target) {
//   let left = 0;
//   let right = numbers.length - 1;
//   let res = [];

//   for (let i = 0; i < numbers.length; i++) {
//     let mid = Math.floor((left + right) / 2);

//     if (numbers[mid] + numbers[mid + 1] !== target) {
//       mid = left + 1;
//     } else {
//       right = mid;
//     }
//     if (numbers[mid] + numbers[mid + 1] === target) {
//       res.push(mid, mid + 1);
//     }
//   }
//   return res;
// };

var twoSum = function (numbers, target) {
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    const sum = numbers[left] + numbers[right];

    if (sum === target) {
      return [left + 1, right + 1];
    }

    if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
};

let result = twoSum(numbers, target);
