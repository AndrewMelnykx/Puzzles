let prices = [7, 1, 5, 3, 6, 4];

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let smallest = Math.min(...prices);
  let smallestInd = prices.indexOf(smallest);
  let = smallestInd;
  for (let i = smallestInd; i < prices.length; i++) {
    let maxProfit = prices[i + 1] - prices[i];
    // maxProfit = Math.max()
    let left = prices[smallestInd];
    let right = maxProfit;
    while (left < right) {
      if (maxProfit < maxProfit + prices[i] - prices[i + 1]) {
        left = left + 1;
      }
    }
    return maxProfit;
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
let result = maxProfit(prices);

console.log(result);
