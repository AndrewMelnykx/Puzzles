var findLHS = function (nums) {
  const counts = new Map();

  // Count occurrences of each number
  for (let num of nums) {
    counts.set(num, (counts.get(num) || 0) + 1);
  }

  let maxLength = 0;

  // Check for each number if there's a harmonious pair (num, num + 1)
  for (let [num, count] of counts) {
    if (counts.has(num + 1)) {
      // Calculate the length of the harmonious subsequence for this pair
      const currentLength = count + counts.get(num + 1);
      maxLength = Math.max(maxLength, currentLength);
    }
  }

  return maxLength;
};

const result = findLHS([1, 3, 2, 2, 5, 2, 3, 7]);
console.log(result);
