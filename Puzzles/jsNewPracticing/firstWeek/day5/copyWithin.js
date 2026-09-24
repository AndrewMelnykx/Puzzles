const arr = [1, 2, 3, 4, 5];

const result = arr.copyWithin(3, 1, -1);

console.log(result);

// target (required): The index where the copying begins and where the values will be placed (in the destination).
// start (optional): The index where to start copying the elements from (inclusive). If not provided, it defaults to 0.
// end (optional): The index where to stop copying the elements (exclusive). If not provided, it defaults to the array’s length.
