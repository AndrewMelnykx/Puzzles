let arr = [40, 10, 20, 30];

/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function (arr) {
  let hash = {};
  let arrayOfInd = [];
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    hash[arr[i]] = (hash[arr[i]] || 0) + 1;
  }
  for (let key in hash) {
    arrayOfInd.push(key);
  }
  for (let i = 1; i < arrayOfInd.length + 1; i++) {
    result.push(i);
  }
  return result;
};

/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function (arr) {
  // 1. Get unique values and sort them
  let sortedUnique = [...new Set(arr)].sort((a, b) => a - b);

  // 2. Create a mapping from value -> rank
  let rankMap = {};
  for (let i = 0; i < sortedUnique.length; i++) {
    rankMap[sortedUnique[i]] = i + 1; // rank starts at 1
  }

  // 3. Replace each number in arr with its rank
  return arr.map(num => rankMap[num]);
};

let result = arrayRankTransform(arr);
console.log(result);
