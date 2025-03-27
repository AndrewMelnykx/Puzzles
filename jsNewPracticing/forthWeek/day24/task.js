let candidates = [2, 3, 5];
let target = 8;

// My solution
var combinationSum = function (candidates, target) {
  let productMap = {};
  let totalResult = [];

  for (let i = 0; i < candidates.length; i++) {
    if (target % candidates[i] === 0) {
      productMap[candidates[i]] = target / candidates[i];
    }
  }
  for (let i = 0; i < candidates.length; i++) {
    for (let j = i + 1; j < candidates.length; j++) {
      if (candidates[i] + candidates[j] === target) {
        totalResult.push([candidates[i], candidates[j]]);
      }
    }
  }

  for (key in productMap) {
    totalResult.push(Array(productMap[key]).fill(Number(key)));
  }
  const recursiveSearch = (target, numbers) => {
    let substructResult = [];
    for (let i = 0; i < candidates.length; i++) {}
  };

  return totalResult;
};

// GPT Solution

var combinationSum = function (candidates, target) {
  let totalResult = [];

  const recursiveSearch = (target, numbers, start) => {
    if (target === 0) {
      totalResult.push([...numbers]);
      return;
    }

    if (target < 0) {
      return;
    }

    for (let i = start; i < candidates.length; i++) {
      numbers.push(candidates[i]);
      recursiveSearch(target - candidates[i], numbers, i);
      numbers.pop();
    }
  };

  recursiveSearch(target, [], 0);

  return totalResult;
};

let output = combinationSum(candidates, target);

console.log(output);
