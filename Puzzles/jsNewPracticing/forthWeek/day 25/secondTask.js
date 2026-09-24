// let nums = [5, 5, 1, 1, 4, 2, 7, 9];
// var jump = function (nums) {
//   let jumps = 0;
//   let lastEnd = 0;
//   let farthest = 0;

//   for (let i = 0; i < nums.length - 1; i++) {
//     farthest = Math.max(farthest, i + nums[i]);
//     if (i === lastEnd) {
//       jumps++;
//       lastEnd = farthest;
//     }
//     if (lastEnd >= nums.length - 1) break;
//   }
//   return jumps;
// };
let nums = [2, 3, 1, 1, 4];
var jump = function (nums) {
  let jumps = 0;
  let lastEnd = 0;
  let farthest = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    farthest = Math.max(farthest, i + nums[i]);
    console.log(
      `Index: ${i}, nums[i]: ${nums[i]}, Farthest: ${farthest}, LastEnd: ${lastEnd}, Jumps: ${jumps}`
    );

    if (i === lastEnd) {
      // Only jump when we reach lastEnd
      jumps++;
      lastEnd = farthest;
      console.log(`Jumping! New LastEnd: ${lastEnd}, Total Jumps: ${jumps}`);
    }

    if (lastEnd >= nums.length - 1) break;
  }

  return jumps;
};

console.log(jump([2, 3, 1, 1, 4]));

let output = jump(nums);
console.log(output);
