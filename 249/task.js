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
  let n = gas.length;

  for (let start = 0; start < n; start++) {
    let tank = 0;
    let completed = true;

    for (let step = 0; step < n; step++) {
      let i = (start + step) % n; // wrap around
      tank += gas[i] - cost[i];

      if (tank < 0) {
        completed = false;
        break;
      }
    }

    if (completed) return start;
  }

  return -1;
};

let result = canCompleteCircuit(gas, cost);

console.log(result);
