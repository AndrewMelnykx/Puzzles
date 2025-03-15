const arr = [1, 8, 6, 2, 5, 4, 8, 3, 7];

// var maxArea = function (height) {
//   let maxData = {};
//   let secondMaxData = {};
//   let maxNumber = -Infinity;
//   for (let i = 0; i < height.length; i++) {
//     if (height[i] > maxNumber) {
//       maxNumber = height[i];
//       maxData = { number: maxNumber, index: i };
//     }
//   }
//   maxNumber = -Infinity;
//   for (let j = maxData.index + 1; j < height.length; j++) {
//     if (height[j] > maxNumber) {
//       maxNumber = height[j];
//       secondMaxData = { numberTwo: maxNumber, index: j };
//     }
//   }

//   let biggestAppropriate = Math.min(maxData.number, secondMaxData.numberTwo);

//   return secondMaxData.numberTwo;
// };

// gpt solution

const maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;
  let maxWater = 0;

  while (left < right) {
    const area = Math.min(height[left], height[right]) * (right - left);
    maxWater = Math.max(maxWater, area);

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxWater;
};
const output = maxArea(arr);

console.log(output);
