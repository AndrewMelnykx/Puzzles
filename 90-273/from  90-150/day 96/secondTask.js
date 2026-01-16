var findRelativeRanks = function (score) {
  const resultArr = [];
  const sortedResult = [...score].sort((a, b) => b - a);

  for (let i = 0; i < score.length; i++) {
    const rank = sortedResult.indexOf(score[i]);

    if (rank === 0) {
      resultArr.push("Gold Medal");
    } else if (rank === 1) {
      resultArr.push("Silver Medal");
    } else if (rank === 2) {
      resultArr.push("Bronze Medal");
    } else {
      resultArr.push((rank + 1).toString());
    }
  }

  return resultArr;
};

const result = findRelativeRanks([10, 3, 8, 9, 4]);
console.log(result);
