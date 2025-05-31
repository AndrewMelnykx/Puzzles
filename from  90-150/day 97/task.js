var distributeCandies = function (candyType) {
  const uniqueCandiesTypes = new Set(candyType).size;
  const maxAllowed = candyType.length / 2;
  return Math.min(uniqueCandiesTypes, maxAllowed);
};

const result = distributeCandies([1, 1, 2, 2, 3, 3]);
console.log(result);
