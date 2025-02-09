// const text =
//   "I bought 12 apples, 5 oranges, and 30 bananas. Product Code: 456789. Remember, apples are red.";

// const pattern = /(apples)/g;
// const pattern2 = /Product Code: (?<id>\d+)/;
// const match2 = text.match(pattern2);
// if (match2) {
//   console.log(match2.groups.id);
// } else {
//   console.log("Product not found");
// }

// console.log(text.match(pattern));
const text =
  "You can reach me at john_doe123@some-domain.co.uk or call (555) 123-4567. Another nickname: Xtreme-Fan_007, and my backup email is test_user@abc.com! Also, my gaming alias is ShadowHunter99.";

const pattern1 = /([a-z0-9_-]+@[a-z0-9_-]+\.\w{2,}(?:\.[a-z]{2,})?)/gi;

const pattern2 = /\((\d+)\)\s*\d{3}-(\d{4})/g;

// const pattern3 = /(\b[a-z]+(?:\w[0-9_-]))/gi;
const pattern3 = /((\b[a-zA-Z0-9]+\b)(?:[a-z0-9-_])+)/gi;
console.log(text.match(pattern3));
