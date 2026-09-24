// function generateRandom() {
//   const charts = "123456789abcdefghijklmnopqrstuvwxvz";
//   const arrOfCharts = [...charts];
// }

// const charts = "123456789abcdefghijklmnopqrstuvwxvz";
// const arrOfCharts = [...charts];
// const midOfCharts = arrOfCharts[Math.round((arrOfCharts.length - 1) / 2)];
// const indexOfMid = arrOfCharts.indexOf(midOfCharts);

// console.log(indexOfMid);

function generateRandom() {
  const chars = "123456789abcdefghijklmnopqrstuvwxvz";
  let strLength = 7;
  let result = "";
  for (let i = 0; i < strLength; i++) {
    let randNum = Math.floor(Math.random() * chars.length);
    result += chars.substring(randNum, randNum + 1);
  }
  return result;
}

const result = generateRandom();

console.log(result);
