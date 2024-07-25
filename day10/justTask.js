function longestConsec(strarr, k) {
  if (k <= 0 || k > strarr.length) {
    return "";
  }

  let maxLength = 0;
  let resultStr = "";

  for (let i = 0; i <= strarr.length - k; i++) {
    let currentConcat = strarr.slice(i, i + k).join("");
    let currentLength = currentConcat.length;

    if (currentLength > maxLength) {
      maxLength = currentLength;
      resultStr = currentConcat;
    }
  }

  return resultStr;
}
