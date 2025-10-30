const user2 = { ...user1 };

// or

const user2 = Object.assign({}, user1);

const user2 = structuredClone(user1);
// or (less ideal, loses functions & special types)
const user2 = JSON.parse(JSON.stringify(user1));

// Rest in function parameters
function sum(...nums) {
  return nums.reduce((a, b) => a + b);
}
console.log(sum(1, 2, 3, 4)); // 10

// Rest in destructuring
const [first, ...restNums] = [10, 20, 30, 40];
console.log(first); // 10
console.log(restNums); // [20, 30, 40]
