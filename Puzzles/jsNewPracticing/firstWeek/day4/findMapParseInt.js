const result = ["1", "2", "3"].map(parseInt);

console.log(result);

// Output:[ 1, NaN, NaN ]

const solution = ["1", "2", "3"].map((x) => parseInt(x));
console.log(solution);
