let gas = [1, 2, 3, 4, 5];
let cost = [3, 4, 5, 1, 2];

/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
  let biggest = [];
  let res = 0;
  for (let i = 0; i < gas.length; i++) {
    if (gas[i] - cost[i] < 0) {
      continue;
    } else {
      biggest.push(i);
    }
  }
  for (let num of biggest) {
    for (let i = num; i < cost.length; i++) {
      let fulling = gas[i] - cost[i] + gas[i + 1];
      if (fulling > 0 && i < gas.length + 1) {
        res = fulling - cost[cost.length - 1];
      }
      if (fulling > 0 && i === gas.length - 1) {
        i = 0;
        res = fulling;
      }
      if (i === num) {
        return i;
      } else {
        return -1;
      }
    }
  }
};
var canCompleteCircuit = function (gas, cost) {
  let totalGas = 0;
  let totalCost = 0;
  let tank = 0;
  let start = 0;

  // Check total feasibility
  for (let i = 0; i < gas.length; i++) {
    totalGas += gas[i];
    totalCost += cost[i];
  }

  if (totalGas < totalCost) return -1;

  // Greedy choice
  for (let i = 0; i < gas.length; i++) {
    tank += gas[i] - cost[i];
    if (tank < 0) {
      start = i + 1;
      tank = 0;
    }
  }

  return start;
};

let result = canCompleteCircuit(gas, cost);

console.log(result);
