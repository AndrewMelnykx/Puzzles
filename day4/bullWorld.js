// function boolToWord(bool) {
//   switch (bool) {
//     case typeof bool !== "boolean": {
//       return;
//     }
//     case bool === true: {
//       return "Yes";
//     }

//     case bool === false: {
//       return "No";
//     }

//     default:
//       return;
//   }
// }

function boolToWord(bool) {
  if (typeof bool !== "boolean") {
    throw new Error("We expected boolean value!");
  }

  switch (bool) {
    case true:
      return "Yes";
    case false:
      return "No";
    default:
      return;
  }
}
