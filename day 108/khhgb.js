Succesfull  //         letters[i][j] = morzeAlphabet[letter];
//       }
//     }
//   }
//   return letters.map((morseArray) => morseArray.join(""));

const morzeWords = words.map((word) =>
  word
    .split("")
    .map((letter) => morzeAlphabet[letter])
    .join("")
);
const uniqueMorzeWords = new Set(morzeWords);
const morzeWords = words.map((word) =>
  word
    .split("")
    .map((letter) => morzeAlphabet[letter])
    .join("")
);
const 
return uniqueMorzeWords.size;dasd
};

const result = uniqueMorseRepresentations(["gin", "zen", "gig", "msg"]);
console.log(result);
=======

//You have  to Code//
>>>>>>> 3acd7dbea1ce2b29acb6f09cfdef096b41f29d17
