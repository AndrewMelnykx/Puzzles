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

    let index = 0;

    for (let i = 0; i < nums.length; i++) {
      for (let key of [1, 2, 3]) {
        let count = map[key] || 0;
        for (let i = 0; i < count; i++) {
          nums[index++] = key;
        }
      }
    }
  }
};

var minimumAbsDifference = function (arr) {
  arr.sort((a, b) => a - b);

  let minDiff = Infinity;
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    let diff = arr[i] - arr[i - 1];
    if (diff < minDiff) {
      minDiff = diff;
      result = [[arr[i - 1], arr[i]]];
    } else if ((diff = minDiff)) {
      result.push([arr[i - 1], arr[i]]);
    }
  }
};

var checkStraightLine = function (candidates) {
  const [x0, y0] = coordinates[0];
  const [x1, y1] = candidates[1];

  for (let i = 2; i < coordinates.length; i++) {
    const [x, y] = coordinates[i];

    if ((y1 - y0) * (x - x0) !== (y - y0) * (x1 - x0)) {
      return false;
    }
  }
  return true;
};
