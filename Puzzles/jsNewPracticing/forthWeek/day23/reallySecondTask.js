let candidates = [2, 3, 5];
let target = 8;

var combinationSum = function (candidates, target) {
  for (let i = 0; i < candidates.length; i++) {
    let nullSum = 0;
    if (candidates[i] + candidates[i + 1] === target) {
      let sumArr = [];
      sumArr.push(candidates[i], candidates[i + 1]);
      return sumArr;
    } else if (candidates[i] || candidates[i + 1] < target) {
      nullSum +=
        candidates[i] || candidates[i] + candidates[i + 1] || candidates[i + 1];
    } else {
      return nullSum;
    }
  }
};

let output = combinationSum(candidates, target);

console.log(output);
