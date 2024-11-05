String.prototype.camelCase = function () {
  return this.split(" ") // Split the string into an array of words by spaces
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize the first letter of each word
    .join(""); // Join the words back together without spaces
};

// Example usage:
console.log("hello case".camelCase()); // Output: "HelloCase"
console.log("camel case word".camelCase()); // Output: "CamelCaseWord"
