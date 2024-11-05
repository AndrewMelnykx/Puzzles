function getCount(str) {
  const vovels = ["a", "e", "i", "o", "u"];
  let count = 0;
  str.split("").forEach((letter) => {
    if (vovels.includes(letter)) {
      count++;
    }
  });
  return count;
}

const result = getCount("abracadabra");
console.log(result);
