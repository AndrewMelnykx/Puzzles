let points = [
  [0, 0],
  [0, 1],
  [1, 0],
  [0, 2],
  [2, 0],
];
// My wrong solution
var largestTriangleArea = function (points) {
  let heightOfTriangle = points[points.length - 2][1];
  let widthOfTriangle = points[points.length - 1][0];
  if (points.reduce((t, h, w) => t + h[0] + w[0]) === 2) {
    return 0.5;
  }
  return Math.abs((heightOfTriangle * widthOfTriangle) / 2);
};

// gpt solution
var largestTriangleArea = function (points) {
  let maxArea = 0;

  function area(x1, y1, x2, y2, x3, y3) {
    return Math.abs(x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2)) / 2;
  }

  for (let i = 0; i < points.length; i++) {
    for (let j = i + 1; j < points.length; j++) {
      for (let k = j + 1; k < points.length; k++) {
        let [x1, y1] = points[i];
        let [x2, y2] = points[j];
        let [x3, y3] = points[k];

        maxArea = Math.max(maxArea, area(x1, y1, x2, y2, x3, y3));
      }
    }
  }

  return maxArea;
};

let result = largestTriangleArea(points);
console.log(result);
