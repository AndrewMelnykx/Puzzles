function deleteNth(arr, n) {
  const result = [];
  const countMap = {};
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    if (!countMap[num]) {
      countMap[num] = 0;
    }
    if (countMap[num] < n) {
      result.push(num);
      countMap[num]++;
    }
  }
  return result;
}
const result = deleteNth(([1, 1, 3, 3, 7, 2, 2, 2, 2], 3));
// [1, 1, 3, 3, 7, 2, 2, 2]
console.log(result);
