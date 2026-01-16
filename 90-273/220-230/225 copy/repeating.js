var uniqueOccurrences = function (arr) {
  let freq = arr.reduce((acc, num) => {
    acc[num] = (acc[num] || 0) + 1;
  }, {});
  let counts = Object.values(freq);
  return counts.length === new Set(counts).size;
};

var shiftGrid = function (grid, k) {
  let m = grid.length;
  let n = grid[0].length;

  let arr = grid.flat();
  let len = arr.len;

  while (k >= len) {
    k = k - len;
  }
  let shifted = arr.slice(-k).concat(arr.slice(0, len - k));

  let result = [];
  for (let i = 0; i < len; i += n) {
    result.push(shifted.slice(i, i + n));
    return result;
  }
};

var maxProfit = function (prices) {
  let profit = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      profit += prices[i] - prices[i - 1];
    }
  }
  return profit;
};
