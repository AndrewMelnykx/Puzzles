//Remove this comment//

// var minCostClimbingStairs = function (cost) {
//   let startIndex;
//   let total;
//   if (cost[0] < cost[1]) {
//     startIndex = cost.indexOf(cost[0]);
//   } else {
//     startIndex = cost.indexOf(cost[1]);
//   }
//   for (let i = startIndex; i < cost.length; i++) {
//     if (cost[startIndex] === 0) {
//       if (cost[startIndex] <= cost[startIndex + 1]) {
//         total = cost[startIndex] += cost[startIndex + 1];
//       } else {
//         total = cost[startIndex] += cost[startIndex + 2];
//       }
//     } else {
//       if (cost[startIndex] <= cost[startIndex + 1]) {
//         total = cost[startIndex] += cost[startIndex + 1];
//       }
//     }
//   }
//   return total;
// };

var minCostClimbingStairs = function (cost) {
  const n = cost.length;
  let prev1 = cost[0];
  let prev2 = cost[1];

  for (let i = 2; i < n; i++) {
    const current = cost[i] + Math.min(prev1, prev2);
    prev1 = prev2;
    prev2 = current;
  }

  return Math.min(prev1, prev2);
};
const result = minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]);
console.log(result);
