let boxTypes = [
  [1, 3],
  [2, 2],
  [3, 1],
];
let truckSize = 4;

/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
// var maximumUnits = function (boxTypes, truckSize) {
//   let units = 0;
//   let sorted = boxTypes.sort((a, b) => b[1] - a[1]);
//   for (let boxes of sorted) {
//     if (truckSize) {
//       units += boxes[1];
//       truckSize -= boxes[0];
//     }
//   }
//   //   for(let i = 0 ; i < boxTypes; i ++){

//   //   }
//   return units;
// };

var maximumUnits = function (boxTypes, truckSize) {
  let units = 0;
  boxTypes.sort((a, b) => b[1] - a[1]);

  for (let [boxCount, perBox] of boxTypes) {
    let take = Math.min(boxCount, truckSize);
    units += take * perBox;
    truckSize -= take;
    if (truckSize === 0) break;
  }

  return units;
};
``;

let result = maximumUnits(boxTypes, truckSize);

console.log(result);
