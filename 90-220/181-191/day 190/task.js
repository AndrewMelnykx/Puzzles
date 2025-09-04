let matrix = [
  [1, 2, 4, 8],
  [10, 11, 12, 13],
  [14, 20, 30, 40],
];
let target = 21;

class Solution {
  /**
   * @param {number[][]} matrix
   * @param {number} target
   * @return {boolean}
   */
  searchMatrix(matrix, target) {
    let left = 0;
    let right = matrix.length - 1;

    while (left <= right) {
      let mid = Math.floor((left + right) / 2);

      for (let i = matrix[mid].length - 1; i >= 0; i--) {
        if (matrix[mid][i] === target) {
          return true;
        } else if (matrix[mid][i] < target) {
          break;
        }
      }

      if (target < matrix[mid][0]) {
        right = mid - 1;
      } else if (target > matrix[mid][matrix[mid].length - 1]) {
        left = mid + 1;
      } else {
        return false;
      }
    }

    return false;
  }
}

//GPT solution

// searchMatrix(matrix,target){
//   let row = 0;
//   let col = matrix[0].length-1
//   while(row < matrix.length && col >=0)
//     {
//       if(matrix[row][col]===target) return true;
//       else if(matrix[row][col]<target)row++;
//       else col--
//   }
//   return false
// }

let solution = new Solution();

let result = solution.searchMatrix(matrix, target);

console.log(result);
