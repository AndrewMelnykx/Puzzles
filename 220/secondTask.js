let coordinates = [
  [0, 0],
  [0, 1],
  [0, -1],
];
/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
// var checkStraightLine = function (coordinates) {
//   let diff = [];
//   for (let item of coordinates) {
//     diff.push(Math.abs(item[1]) - Math.abs(item[0]));
//   }
//   let set = new Set(diff);
//   if (set[0] === 0) {
//     set.delete(0);
//   }
//   return set.size === 1 ? true : false;
// };

var checkStraightLine = function (coordinates) {
  const [x0, y0] = coordinates[0];
  const [x1, y1] = coordinates[1];

  for (let i = 2; i < coordinates.length; i++) {
    const [x, y] = coordinates[i];
    if ((y1 - y0) * (x - x0) !== (y - y0) * (x1 - x0)) {
      return false;
    }
  }
  return true;
};

let result = checkStraightLine(coordinates);

console.log(result);
