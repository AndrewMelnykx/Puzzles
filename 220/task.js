let arr = [1, 2, 2, 1, 1, 3];

/**
 * @param {number[]} arr
 * @return {boolean}
 */
// var uniqueOccurrences = function (arr) {
//   let map = {};

//   for (let i = 0; i < arr.length; i++) {
//     let key = arr[i];
//     map[key] = (map[key] || 0) + 1;
//   }

//   let obj = Object.values(map);
//   let set = new Set(obj);
//   return obj.length === set.size ? true : false;
// };

var uniqueOccurrences = function (arr) {
  let freq = arr.reduce((acc, num) => {
    acc[num] = (acc[num] || 0) + 1;
    return acc;
  }, {});
  let counts = Object.values(freq);
  return counts.length === new Set(counts).size;
};

let result = uniqueOccurrences(arr);

console.log(result);
