let target = [1, 2, 3, 4];
let arr = [2, 4, 1, 3];

/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */

var canBeEqual = function (target, arr) {
  let map = {};

  for (let num of target) {
    map[num] = (map[num] || 0) + 1;
  }
  for (let num of arr) {
    if (!map[num]) return false;
    map[num--];
  }
  return true;
};

let result = canBeEqual(target, arr);
