let arr = [
  [0, 1],
  [2, 3],
  [4, 5],
];

const flattenArr = arr.reduce(
  (previousValue, currentValue) => previousValue.concat(currentValue),
  []
);
console.log(flattenArr);
