let arr = [
  [0, 1],
  [2, 3],
  [4, 5],
];

const flattenArr = arr.reduce(
  (previousValue, newValue) => previousValue.concat(newValue),
  []
);
console.log(flattenArr);
