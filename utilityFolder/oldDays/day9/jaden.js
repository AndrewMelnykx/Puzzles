function oddOrEven(arr) {
  // Compute the sum of the elements in the array
  const totalSum = arr.reduce((acc, num) => acc + num, 0);

  // Check if the sum is even or odd and return the corresponding string
  return totalSum % 2 === 0 ? "even" : "odd";
}

// Test cases
console.log(oddOrEven([0])); // Output: "even"
console.log(oddOrEven([0, 1, 4])); // Output: "odd"
console.log(oddOrEven([1, 2, 3])); // Output: "even"
console.log(oddOrEven([1, 2, 3, 4])); // Output: "even"
console.log(oddOrEven([1, 1, 1])); // Output: "odd"
