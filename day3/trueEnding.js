// function arrFromStr(str, solution) {
//   if (typeof str !== "string") {
//     return;
//   }
//   const lastlettersArr = [...str];
//   const lastIndex = lastlettersArr.length - 1;
//   const beforeLastIndex = lastIndex - 1;

//   const lastTwoOfLatArr = `${lastlettersArr[beforeLastIndex]}${lastlettersArr[lastIndex]}`;
//   if (solution !== lastTwoOfLatArr) {
//     return;
//   } else {
//     console.log("success");
//   }
//   //   return `'${lastlettersArr[beforeLastIndex]}${lastlettersArr[lastIndex]}'`;
// }
// const result = arrFromStr("length", "th");
// console.log(result);

function solution(str, ending) {
  return str.endsWith(ending);
}
