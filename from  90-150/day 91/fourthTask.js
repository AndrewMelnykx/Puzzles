var findDisappearedNumbers = function (nums) {
  const n = nums.length;
  const correctArr = [];

  for (let i = 1; i <= n; i++) {
    correctArr.push(i);
  }

  const needable = [];
  for (const num of correctArr) {
    if (!nums.includes(num)) {
      needable.push(num);
    }
  }

  return needable;
};

const result = findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]);
console.log(result);
