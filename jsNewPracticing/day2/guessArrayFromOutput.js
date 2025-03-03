// 1 // Question: Guess the Array.from output (with reason)
// const result = Array.from({length: 10}, (v, i) => i); // console.log(result);
//Options: (a) undefined (b) Type error
// 2
// 3
// 4
// 5
// 6
// //
// 7
// //
// 8
// 9
// (c) fn() {({length: 10}, (v, i) => i)}
// (d) [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
// I

const strFrom = Array.from("12345");
const arrInArr = Array.from([1, 2, 3], (x) => x + x);

const newArrayFromWithArgument = Array.from([1, 2, 3], (x) => x * 2);

console.log(newArrayFromWithArgument);
