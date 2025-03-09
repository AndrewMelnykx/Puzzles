// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

// let prices = [2, 4, 1];

// var maxProfit = function (prices) {
//   let copy = [...prices];
//   let ascendingPrice = copy.sort((a, b) => a - b);
//   let minIndex = prices.indexOf(ascendingPrice[0]);
//   let minPrice = prices[minIndex];
//   let pricesAfterPurchase = prices.slice(minIndex, ascendingPrice.length);

//   let result =
//     pricesAfterPurchase.sort((a, b) => a - b)[pricesAfterPurchase.length - 1] -
//     minPrice;

//   if (result > 0) {
//     return result;
//   }
//   return ascendingPrice;
// };

// let prices = [7, 1, 5, 3, 6, 4];
// let prices = [7, 6, 4, 3, 1];
let prices = [1, 2];
// var maxProfit = function (prices) {
//   let result = [];

//   for (let i = 0; i < prices.length; i++) {
//     for (let j = i + 1; j < prices.length; j++) {
//       result.push(prices[j] - prices[i]);
//     }
//   }
//   result.sort((a, b) => b - a);
//   if (result[0] > 0) {
//     return result[0];
//   }
//   return result;
// };

var maxProfit = function (prices) {
  let minPrice = prices[0];
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    const profit = prices[i] - minPrice;
    maxProfit = Math.max(maxProfit, profit);
    minPrice = Math.min(minPrice, prices[i]); // update minPrice only if you find a lower price
  }

  return maxProfit;
};
const result = maxProfit(prices);

console.log(result);
