let citations = [3, 0, 6, 1, 5];

/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
  let count = 0;
  if (citations.length === 1 && citations[0] !== 0) {
    return 1;
  }
  if (citations[0] === 0) {
    return 0;
  }
  for (let i = 0; i < citations.length; i++) {
    if (citations[i] >= 3) {
      count++;
    }
  }
  return count;
};

let result = hIndex(citations);
console.log(result);
