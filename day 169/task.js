// let n = 3;
// // let trust = [
// //   [1, 3],
// //   [2, 3],
// // ];
// let trust = [
//   [1, 3],
//   [2, 3],
//   [3, 1],
// ];

// var findJudge = function (n, trust) {
//   let trustVeriff = {};
//   if (trust.length - 1 < 2) {
//     return trust[0][1];
//   }
//   for (let i = 0; i < trust.length - 1; i++) {
//     if (trustVeriff[[i][1]] !== undefined) {
//       return trustVeriff[[i][1]];
//     }
//     trustVeriff[trust[i][0]] = true;
//   }
//   //   for (let i = 0; i < trust.length - 1; i++) {
//   //     if (trust[i][1] !== trustVeriff[trust[i][1]]) {
//   //       return trust[i][1];
//   //     } else {
//   //       return -1;
//   //     }
//   //   }

//   return trustVeriff;
// };

var findJudge = function (n, trust) {
  let trustCounts = new Array(n + 1).fill(0);

  for (let [a, b] of trust) {
    trustCounts[a]--; // a trusts someone, so -1
    trustCounts[b]++; // b is trusted by someone, so +1
  }

  for (let i = 1; i <= n; i++) {
    if (trustCounts[i] === n - 1) {
      return i; // This is the judge
    }
  }

  return -1; // No judge found
};

let result = findJudge(n, trust);

console.log(result);
