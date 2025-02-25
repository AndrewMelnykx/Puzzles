// const text =
//   "Hello Mike. Here is my phone number +38 (098) 330-00-03, my wife phone number 068-339-09-09 and 920462 my sun number 0683390791. Please use same country code";
// const regex = /(\+?[0-9]+)\s?([0-9-\(\)]+)\s?([0-9-]+)/g;

// // const regex2 = (/\+?\d[+0-9\- ()]+\d/g);
// console.log(text.match(regex));

const message =
  ":apple::apple:<@KATE / >:apple:<@VIKTOR/ >:apple::apple:<@SERGEY/><@Dima />:apple::apple:<@viktor/><@Kate /><@Max/><@alisa /> :like: received:apple::apple::apple: this is so cool:apple: <@oleg/>:like:apple:like:!";

function countEmojies(message, emoji) {
  const emojiRegex = `(:${emoji}:)`;
  const nicknameRegex = `(?<=\\<\\@)([A-Za-z]+)`;
  const mainRegex = `${emojiRegex}|${nicknameRegex}`;
  const regexEx = new RegExp(mainRegex, "gi");

  const finalData = message.match(regexEx);

  const namesList = {};
  let emojiCount = 0;

  for (let i = finalData.length - 1; i >= 0; i--) {
    const emojiFromData = finalData[i][0] === ":";
    if (emojiFromData) {
      emojiCount++;
    } else {
      const name = finalData[i].toLowerCase();
      namesList[name] = (namesList[name] || 0) + emojiCount;
      if (finalData[i - 1][0] === ":") {
        emojiCount = 0;
      }
    }
  }

  return namesList;
}
console.log(countEmojies(message, "apple"));
