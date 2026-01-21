let gain = [-5, 1, 5, 0, -7];

/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gain) {
  gain.unshift(0);
  let res = [];
  let diff = gain[0];

  for (let i = 0; i < gain.length; i++) {
    diff += gain[i];
    res.push(diff);
  }
  return Math.max(...res);
};
var largestAltitude = function (gain) {
  let altitude = 0;
  let maxAltitude = 0;

  for (let i = 0; i < gain.length; i++) {
    altitude += gain[i];
    maxAltitude = Math.max(maxAltitude, altitude);
  }

  return maxAltitude;
};

let result = largestAltitude(gain);

console.log(result);
