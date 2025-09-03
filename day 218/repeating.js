var subsets = function (nums) {
  let result = [];

  function backtrack(start, current) {
    result.push([...current]);
    for (let i = start; i < nums.length; i++) {
      current.push([nums[i]]);
      backtrack(i + 1, current);
      current.pop();
    }
  }
  backtrack(0, []);
  return result;
};

var sortColors = function (nums) {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    let key = nums[i];
    map[key] = (map[key] || 0) + 1;
  }
  let index = 0;

  for (let key of [1, 2, 3]) {
    let count = map[key] || 0;
    for (let i = 0; i < count; i++) {
      nums[index++] = key;
    }
  }
};
