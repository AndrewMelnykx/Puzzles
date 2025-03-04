const arr = ["I want to become", "a professional front end", "developer"];

// MY SOLUTION

// const stringFromArr = arr.join("");
// const eachWordString = stringFromArr.split(" ");

// console.log(eachWordString);

// Another Solution

const result = arr.map((x) => x.split(" "));

// console.log(result.flat());

const flatArrSolution = arr.flatMap((x) => x.split(" "));

console.log(flatArrSolution);
