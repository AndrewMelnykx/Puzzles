var map = function (arr, fn) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(fn(arr[i], i));
  }
  return result;
};

const result = map(
  [1, 2, 3],
  (fn = function plusone(n) {
    return n + 1;
  })
);
console.log(result);
