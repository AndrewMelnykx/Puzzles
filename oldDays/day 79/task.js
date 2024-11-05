var sortBy = function (arr, fn) {
  // Map each element to an object containing both the original value and the transformed value.
  const mapped = arr.map((el) => {
    return { original: el, transformed: fn(el) };
  });

  // Sort based on the transformed values.
  mapped.sort((a, b) => a.transformed - b.transformed);

  // Return the original elements in the sorted order.
  return mapped.map((el) => el.original);
};
const result = sortBy(
  (arr = [{ x: 1 }, { x: 0 }, { x: -1 }]),
  (fn = (x) => x.x)
);
console.log(result);
