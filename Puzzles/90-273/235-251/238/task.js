let arr = [40, 10, 20, 30];

/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function (arr) {
  let sorted = [...arr].sort((a, b) => a - b);
  let map = {};
  let rank = 1;
  for (let i = 0; i < sorted.length; i++) {
    if (map[sorted[i]] === undefined) {
      map[sorted[i]] = rank;
      rank++;
    }
  }
  return arr.map(x => map[x]);
};

var arrayRankTransform = function (arr) {
  let sorted = [...arr].sort((a, b) => a - b);
  let map = {};
  let rank = 1;

  for (let i = 0; i < sorted.length; i++) {
    if (map[sorted[i]] === undefined) {
      map[sorted[i]] = rank;
      rank++;
    }
  }
  return arr.map(x => map[x]);
};

var arrayRankTransform = function (arr) {
  let sorted = [...arr].sort((a, b) => a - b);
  let map = {};
  let rank = 1;

  for (let i = 0; i < sorted.length; i++) {
    if (map[sorted[i]] === undefined) {
      map[sorted[i]] = rank;
      rank++;
    }
    return arr.map(x => map[x]);
  }
};

let result = arrayRankTransform(arr);

console.log(result);
