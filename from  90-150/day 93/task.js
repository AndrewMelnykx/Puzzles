var findContentChildren = function (g, s) {
  let counterOfCookies = 0;
  const sortedG = g.sort((a, b) => a - b);
  const sortedS = s.sort((a, b) => a - b);
  let i = 0;
  let j = 0;

  while (i < sortedG.length && j < sortedS.length) {
    if (sortedS[j] >= sortedG[i]) {
      counterOfCookies++;
      i++;
    }
    j++;
  }

  return counterOfCookies;
};

const result = findContentChildren([10, 9, 8, 7], [5, 6, 7, 8]);
console.log(result);
