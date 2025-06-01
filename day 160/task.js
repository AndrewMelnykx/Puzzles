let aliceSizes = [2];
let bobSizes = [1, 3];

var fairCandySwap = function (aliceSizes, bobSizes) {
  const sumA = aliceSizes.reduce((t, n) => t + n, 0);
  const sumB = bobSizes.reduce((t, n) => t + n, 0);
  const diff = (sumA - sumB) / 2;

  const setB = new Set(bobSizes);

  for (let a of aliceSizes) {
    const b = a - diff;
    if (setB.has(b)) {
      return [a, b];
    }
  }
};

const result = fairCandySwap(aliceSizes, bobSizes);

console.log(result);
