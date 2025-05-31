function isIsogram(str) {
  const lowerCaseStr = str.toLowerCase();
  const setFromStr = new Set(lowerCaseStr);

  return setFromStr.size === lowerCaseStr.length;
}
