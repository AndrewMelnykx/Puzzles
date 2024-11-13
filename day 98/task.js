var findRestaurant = function (list1, list2) {
  const indexMap = new Map();
  const resultArr = [];
  let minIndexSum = Infinity;

  // Map each restaurant in list1 to its index
  for (let i = 0; i < list1.length; i++) {
    indexMap.set(list1[i], i);
  }

  for (let j = 0; j < list2.length; j++) {
    if (indexMap.has(list2[j])) {
      const indexSum = j + indexMap.get(list2[j]);

      if (indexSum < minIndexSum) {
        minIndexSum = indexSum;
        resultArr.length = 0;
        resultArr.push(list2[j]);
      } else if (indexSum === minIndexSum) {
        resultArr.push(list2[j]);
      }
    }
  }

  return resultArr;
};
const result = findRestaurant(
  ["Shogun", "Tapioca Express", "Burger King", "KFC"],
  ["Piatti", "The Grill at Torrey Pines", "Hungry Hunter Steakhouse", "Shogun"]
);
console.log(result);
