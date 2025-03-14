const arrNums = [2, 3, 4, 2, 6, 8, 9, 5, 11, 22, 6];

const newStringedNums = arrNums.map((n) => n.toString());

// const setFromArr = new Set(arr);

// const arrayFromSet = Array.from(setFromArr);

// console.log(arrayFromSet);

const filteredArrNums = [...new Set(arrNums)];

const filteredArrString = [...new Set(newStringedNums)];

console.log(filteredArrNums);
