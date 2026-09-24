let nums = [-1, 0, 1, 2, -1, -4];

// class Solution {
//   /**
//    * @param {number[]} nums
//    * @return {number[][]}
//    */
//   threeSum(nums) {
//     const map = {};
//     let result = [];
//     for (let i = 0; i < nums.length; i++) {
//       map[i] = nums[i];
//     }
//     for(let key in map){
//         if(Number(key)!== Number(key)){
//             while()
//             result.push(map[key])
//         }
//     }

//     return map;
//   }
// }

class Solution {
  threeSum(nums) {
    nums.sort((a, b) => a - b); // sort ascending
    const result = [];

    for (let i = 0; i < nums.length - 2; i++) {
      if (i > 0 && nums[i] === nums[i - 1]) continue; // skip duplicates

      let left = i + 1;
      let right = nums.length - 1;

      while (left < right) {
        const sum = nums[i] + nums[left] + nums[right];

        if (sum === 0) {
          result.push([nums[i], nums[left], nums[right]]);
          while (left < right && nums[left] === nums[left + 1]) left++;
          while (left < right && nums[right] === nums[right - 1]) right--;
          left++;
          right--;
        } else if (sum < 0) {
          left++;
        } else {
          right--;
        }
      }
    }
    return result;
  }
}

class Solution {
  threeSum(nums) {
    nums.sort((a, b) => a - b);
    const result = [];

    for (let i = 0; i < nums.length - 2; i++) {
      if (i > 0 && nums[i] === nums[i - 1]) continue;
      let left = i + 1;
      let right = nums.length - 1;
      while (left < right) {
        const sum = nums[i] + nums[left] + nums[right];
        if (sum === 0) {
          result.push([nums[i], nums[left], nums[right]]);
          while (left < right && nums[left] === nums[left + 1]) left++;
          while (left < right && nums[left] === nums[right - 1]) right--;
          left++;
          right--;
        } else if (sum < 0) {
          left++;
        } else {
          right--;
        }
      }
    }
    return result;
  }
}

let solution = new Solution();
let result = solution.threeSum(nums);

console.log(result);
