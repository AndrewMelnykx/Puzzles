const arr = [1, 2, 3, 2, 1, 4, 5, 6];

const repeatWIthObj = (arr) => {
  const count = {};
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    count[arr[i]] = (count[arr[i]] || 0) + 1;
  }
  for (let i = 0; i < arr.length; i++) {
    if (count[arr[i]] === 1) {
      result.push(arr[i]);
    }
  }
  return result;
};

const onceRepeatedArr = (arr) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let counter = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        counter++;
      }
    }
    if (counter === 1) {
      result.push(arr[i]);
    }
  }
  return result;
};

console.log(onceRepeatedObj(arr));
