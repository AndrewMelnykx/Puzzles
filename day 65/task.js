function breakRules(rules) {
  if (rules.length === 1) {
    return [rules[0].slice().reverse()];
  }
  if (rules.length === 2) {
    const [firstSub, secondSub] = rules;
    if (firstSub[0] === secondSub[1]) {
      const concatArr = firstSub.concat(secondSub).reverse();
      return concatArr;
    }
  }
}
//   breakRules([[1,2],[2,3]]) should return: [[3,2,2,1]]

const result = breakRules([
  [1, 2],
  [2, 3],
]);
console.log(result);
