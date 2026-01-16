let arr = [1, 2, 2, 6, 6, 6, 6, 7, 10];

/**
 * @param {number[]} arr
 * @return {number}
 */
// var findSpecialInteger = function (arr) {
//   let total = arr.length;

//   let map = {};
//   let result = {};

//   for (let i = 0; i < arr.length; i++) {
//     let key = arr[i];
//     map[key] = (map[key] || 0) + 1;
//   }
//   for (let key in map) {
//     result[key] = Math.floor((map[key] / total) * 100);
//   }
//   for (let key in result) {
//     if (result[key] > 25) {
//       return Number(key);
//     }
//   }
// };

var findSpecialInteger = function (arr) {
  let total = arr.length;
  let map = {};

  // Count occurrences
  for (let i = 0; i < arr.length; i++) {
    let key = arr[i];
    map[key] = (map[key] || 0) + 1;
  }

  // Find the one > 25%
  for (let key in map) {
    if (map[key] / total > 0.25) {
      return Number(key);
    }
  }
};
/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function (arr) {
  let n = arr.length;
  let quarter = Math.floor(n / 4);

  for (let i = 0; i < n - quarter; i++) {
    if (arr[i] === arr[i + quarter]) {
      return arr[i]; // guaranteed unique answer
    }
  }
};

let result = findSpecialInteger(arr);

console.log(result);
