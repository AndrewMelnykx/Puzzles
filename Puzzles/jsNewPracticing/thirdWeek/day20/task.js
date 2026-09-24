// let nums = [4, 4, 5];
// let nums = [1, 2, 2, 4];
// let nums = [1, 1];

// var findErrorNums = function (nums) {
//   let targetIndex = 0;
//   for (let i = 0; i < nums.length - 1; i++) {
//     if (nums[i] === nums[i + 1]) {
//       targetIndex = i;
//     }
//   }
//   if (nums[targetIndex] < nums[targetIndex + 2]) {
//     return [nums[targetIndex], nums[targetIndex + 1] + 1];
//   } else {
//     return [nums[targetIndex] - 1, nums[targetIndex]];
//   }
// };

var findErrorNums = function (nums) {
  let n = nums.length;
  let sum = 0;
  let expectedSum = (n * (n + 1)) / 2; // This is the sum of 1 to n
  let sumOfSquares = 0;
  let expectedSumOfSquares = (n * (n + 1) * (2 * n + 1)) / 6; // Sum of squares of 1 to n

  let seen = new Set();
  let duplicate;

  // Iterate through the array
  for (let num of nums) {
    sum += num;
    sumOfSquares += num * num;

    if (seen.has(num)) {
      duplicate = num; // Found the duplicate number
    } else {
      seen.add(num);
    }
  }

  // The missing number can be calculated as follows:
  let missing = expectedSum - (sum - duplicate);

  return [duplicate, missing];
};
var findErrorNums = function (nums) {
  let n = nums.length;
  let sum = 0;
  let expectedSum = (n * (n + 1)) / 2; // Sum of numbers from 1 to n
  let sumOfSquares = 0;
  let expectedSumOfSquares = (n * (n + 1) * (2 * n + 1)) / 6; // Sum of squares from 1 to n

  let seen = new Set();
  let duplicate;

  // Iterate through the array to calculate the sum and find the duplicate
  for (let num of nums) {
    sum += num;
    sumOfSquares += num * num;

    if (seen.has(num)) {
      duplicate = num; // Found the duplicate number
    } else {
      seen.add(num);
    }
  }

  // The missing number can be calculated correctly
  let missing = expectedSum - sum + duplicate;

  return [duplicate, missing];
};

var findErrorNums = function (nums) {
  let n = nums.length;
  let sum = 0;
  let expectedSum = (n * (n + 1)) / 2; // Sum of numbers from 1 to n
  let sumOfSquares = 0;
  let expectedSumOfSquares = (n * (n + 1) * (2 * n + 1)) / 6; // Sum of squares from 1 to n

  let seen = new Set();
  let duplicate;

  // Iterate through the array to calculate the sum and find the duplicate
  for (let num of nums) {
    sum += num;
    sumOfSquares += num * num;

    if (seen.has(num)) {
      duplicate = num; // Found the duplicate number
    } else {
      seen.add(num);
    }
  }

  // The missing number can be calculated correctly
  let missing = expectedSum - sum + duplicate;

  return [duplicate, missing];
};

let output = findErrorNums([4, 4, 5]);
console.log(output); // Expected output: [4, 3]
