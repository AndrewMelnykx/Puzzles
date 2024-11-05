const expandedForm = (num) => {
  let numStr = num.toString();
  let result = [];

  for (let i = 0; i < numStr.length; i++) {
    let digit = numStr[i];
    let placeValue = digit * Math.pow(10, numStr.length - i - 1);

    if (placeValue > 0) {
      result.push(placeValue);
    }
  }

  return result.join(" + ");
};
