let accounts = [
  [1, 2, 3],
  [3, 2, 1],
];

/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
  let currentMax = 0;

  for (let account of accounts) {
    let max = account.reduce((t, once) => t + once, 0);
    currentMax = Math.max(max, currentMax);
  }
  return currentMax;
};

let result = maximumWealth(accounts);

console.log(result);
