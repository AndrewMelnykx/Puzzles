function noSpace(x) {
  const newWithoutEmptinessArr = [];
  x.split("").forEach((element) => {
    if (element !== " ") {
      newWithoutEmptinessArr.push(element);
    }
  });
  return newWithoutEmptinessArr.join("");
}
