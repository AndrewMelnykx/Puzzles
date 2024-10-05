function openOrSenior(data) {
  const resultArr = [];
  for (let i = 0; i < data.length; i++) {
    const [age, handicap] = data[i];
    if (age >= 55 && handicap > 7) {
      resultArr.push("Senior");
    } else {
      resultArr.push("Open");
    }
  }
  return resultArr;
}

const result = openOrSenior([
  [45, 12],
  [55, 21],
  [19, -2],
  [104, 20],
]);

console.log(result);
