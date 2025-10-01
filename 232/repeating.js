var arrayRankTransform = function (arr) {
  let sortedUnique = [...new Set(arr)].sort((a, b) => a - b);
  let rankMap = {};

  for (let i = 0; i < sortedUnique.length; i++) {
    rankMap[sortedUnique[i]] = i + 1;
  }
  return arr.map(num => rankMap[num]);
};
