function orderWeight(strng) {
  if (strng.trim() === "") {
    return "";
  }
  const weightArray = strng.split(" ").map(Number);

  const digitSums = weightArray.map((weight) => {
    const digits = weight.toString().split("");
    return {
      weight,
      sum: digits.reduce((acc, digit) => acc + Number(digit), 0),
    };
  });
  digitSums.sort((a, b) => {
    if (a.sum !== b.sum) {
      return a.sum - b.sum;
    } else {
      return a.weight.toString().localeCompare(b.weight.toString());
    }
  });

  const sortedWeights = digitSums.map((item) => item.weight);
  return sortedWeights.join(" ");
}

const result = orderWeight("56 65 74 100 99 68 86 180 90");
console.log(result);
