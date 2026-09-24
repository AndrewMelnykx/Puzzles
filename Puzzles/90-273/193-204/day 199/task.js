let prices = [10, 1, 5, 6, 7, 1];

class Solution {
  /**
   * @param {number[]} prices
   * @return {number}
   */
  maxProfit(prices) {
    let left = 0;
    let right = 1;
    let max = 0;
    while (right < prices.length) {
      if (prices[left] < prices[right]) {
        let profit = prices[right] - prices[left];
        max = Math.max(profit, max);
      } else {
        left = right;
      }
      right++;
    }
    return max;
  }
}

let solution = new Solution();
let result = solution.maxProfit(prices);
console.log(result);
