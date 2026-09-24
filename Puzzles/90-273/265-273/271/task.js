let arr = [1, 4, 2, 5, 3];

/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function (arr) {
  const n = arr.length;
  let sum = 0;

  for (let i = 0; i < n; i++) {
    const leftEven = Math.floor(i / 2) + 1;
    const leftOdd = Math.floor((i + 1) / 2);
    const rightEven = Math.floor((n - i - 1) / 2) + 1;
    const rightOdd = Math.floor((n - i) / 2);

    const oddCount = leftEven * rightEven + leftOdd * rightOdd;
    sum += arr[i] * oddCount;
  }

  return sum;
};

let result = sumOddLengthSubarrays(arr);

console.log(result);
