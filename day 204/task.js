let stones = [2, 7, 4, 1, 8, 1];

/**
 * @param {number[]} stones
 * @return {number}
 */
// WRONG SOLUTION
var lastStoneWeight = function (stones) {
  let result = [];
  stones.sort((a, b) => b - a);
  for (let i = 0; i < stones.length; i++) {
    while (result.length > 1) {
      if (stones[i] > stones[i + 1]) {
        result.push(stones[i] - stones[i + 1]);
      } else {
        result.push(stones[i]);
      }
    }
  }
  return result;
};

var lastStoneWeight = function (stones) {
  while (stones.length > 1) {
    stones.sort((a, b) => b - a);

    let y = stones.shift();
    let x = stones.shift();

    if (y !== x) {
      stones.push(y - x);
    }
  }
  return stones.length === 0 ? 0 : stones[0];
};

let result = lastStoneWeight(stones);
console.log(result);
