//It has to return the smallest num of the 3 elements like 5,1,3 will be 1 and 1,3,2, 1
//output [1,1,2,2,1,1,1,2,3]

let arr = [5, 1, 3, 2, 4, 6, 1, 7, 3, 2, 8];

function lessOfClosesThree(nums) {
  let result = [];
  for (let i = 0; i < nums.length - 2; i++) {
    result.push(Math.min(nums[i], nums[i + 1], nums[i + 2]));
  }
  return result;
}

const output = lessOfClosesThree(arr);

console.log(output);
