// var searchRange = function (nums, target) {
//   let left = 0;
//   let right = nums.length - 1;
//   let result = {};
//   let resultArray = [];

//   while (left <= right) {
//     let mid = Math.floor((left + right) / 2);
//     if (nums[mid] <= target) {
//       left++;
//       if (nums[left] === target) {
//         result[left] = target;
//       }
//     } else {
//       if (nums[mid] >= target) {
//         right--;
//         if (nums[right] === target) {
//           result[right] = target;
//         }
//       }
//     }
//   }
//   for (let key in result) {
//     resultArray.push(parseInt(key));
//   }
//   if (resultArray.length === 1) {
//     resultArray = [0, 0];
//   }

//   if (resultArray.length > 1) {
//     return resultArray;
//   } else {
//     return [-1, -1];
//   }
// };

let nums = [5, 7, 7, 8, 8, 10];
let target = 8;

var searchRange = function (nums, target) {
  let findFirst = function (nums, target) {
    let left = 0,
      right = nums.length - 1,
      first = -1;
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (nums[mid] >= target) {
        if (nums[mid] === target) first = mid;
        right = mid - 1; // move left to find first occurrence
      } else {
        left = mid + 1;
      }
    }
    return first;
  };

  let findLast = function (nums, target) {
    let left = 0,
      right = nums.length - 1,
      last = -1;
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (nums[mid] <= target) {
        if (nums[mid] === target) last = mid;
        left = mid + 1; // move right to find last occurrence
      } else {
        right = mid - 1;
      }
    }
    return last;
  };

  let first = findFirst(nums, target);
  let last = findLast(nums, target);

  return [first, last];
};

var searchRange = function (nums, target) {
  let findFirst = function (nums, target) {
    let left = 0;
    right = nums.length - 1;
    first = -1;
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (nums[mid] >= target) {
        if (nums[mid] === target) {
          first = mid;
          right = mid - 1;
        } else {
          left = mid + 1;
        }
      }
    }
    return first;
  };
  let findLast = function (nums, target) {
    let left = 0;
    right = nums.length - 1;
    last = -1;
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (nums[mid] <= target) {
        if (nums[mid] === target) {
          last = target;
        }
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  };
  let first = findFirst(nums, target);
  let last = findLast(nums, target);
};

let output = searchRange(nums, target);

console.log(output);
