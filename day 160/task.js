let aliceSizes = [2];
let bobSizes = [1, 3];

for (let a of aliceSizes) {
  // Loop through each candy size that Alice has
  // In your example, aliceSizes = [2], so a = 2 on the first (and only) iteration

  const b = a - diff;
  // diff was calculated as (sumA - sumB) / 2 = (2 - 4) / 2 = -1
  // So: b = 2 - (-1) = 2 + 1 = 3
  // This means: to make both sides equal, if Alice gives away candy of size 2,
  // Bob must give her a candy of size 3 in return

  if (setB.has(b)) {
    // setB = new Set(bobSizes) = Set {1, 3}
    // Check if Bob has a candy of size 3 — he does!

    return [a, b];
    // So we return the pair [2, 3]
    // Meaning Alice gives 2 and receives 3 to balance both totals
  }
}

var fairCandySwap1 = function (aliceSizes, bobSizes) {
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

var fairCandySwap = function (aliceSizes, bobSizes) {
  const sumA = aliceSizes.reduce((t, n) => t + n, 0);
  const sumB = bobSizes.reduce((t, n) => t + n, 0);

  const diff = (sumA - sumB) / 2;
  const setB = new Set(bobSizes);
  for (let aliceCandy of aliceSizes) {
    const bobCandy = aliceCandy - diff;
    if (setB.has(bobCandy)) {
      return [aliceCandy, bobCandy];
    }
  }
};
