let n = 3;
// // let trust = [
// //   [1, 3],
// //   [2, 3],
// // ];
let trust = [
  [1, 3],
  [2, 3],
  [3, 1],
];

var findJudge = function (n, trust) {
  let trustCounts = new Array(n + 1).fill(0);
  for (let [a, b] of trust) {
    trustCounts[a]--;
    console.log("minuses", trustCounts[a]--);
    trustCounts[b]++;
    console.log("pluses", trustCounts[b]++);
  }
  for (let i = 0; i < n; i++) {
    if (trustCounts[i] === n - 1) {
      return i;
    }
  }
};

let result = findJudge(n, trust);

console.log(result);
