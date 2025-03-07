let str = "123";

let result1 = str.repeat(0);
let result2 = str.repeat(3.5);
let result3 = str.repeat(-1);

console.log(result1.length);
console.log(result2.length);
// console.log(result3.length);

console.log((result1 + result2).length);
