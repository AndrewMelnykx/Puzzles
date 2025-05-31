function sortArray(array) {
  // Step 1: Extract the odd numbers and sort them
  const odds = array.filter((n) => n % 2 !== 0).sort((a, b) => a - b);

  // // Step 2: Replace the odd numbers in the original array with sorted ones
  // let oddIndex = 0; // Keep track of the index of sorted odd numbers
  // return array.map((n) => {
  //   if (n % 2 !== 0) {
  //     // Replace the odd number with the next sorted odd number
  //     return odds[oddIndex++];
  //   }
  //   return n; // Keep even numbers unchanged
  // });

  let oddIndex = 0;
  return array.map((n) => {
    if (n % 2 !== 0) {
      return odds[oddIndex++];
    }
    return n;
  });
}

const result = sortArray([5, 8, 6, 3, 4]);
console.log(result);
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
