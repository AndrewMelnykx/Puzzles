function alphabetPosition(text) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  return text
    .toLowerCase()
    .split("")
    .map((letter) => {
      const position = alphabet.indexOf(letter) + 1;
      return position > 0 ? position : "";
    })
    .filter(Boolean)
    .join(" ");
}
const result = alphabetPosition("I did it");

console.log(result);
