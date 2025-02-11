// // SC Code Matching
// const text1 =
//   "Contact agent at SC-12345X or send an email to spy@secret.com. Alternative code: SC-98765. Phone: (555) 678-9012. Another one: SC-54321Y!";
// const regex1 = /SC-\d{5,}[A-Z]?/g;
// console.log(text1.match(regex1));

// // Username Matching
// const text2 =
//   "Follow me on @CodeMaster, and check out @dev_guru99. But not this: @a or @12!";
// const regex2 = /@[a-zA-Z0-9_]{3,}/g;
// console.log(text2.match(regex2));

// // Date Format Conversion
// const text3 = "Today's dates are 12/09/2023 and 07-04-2022.";
// const regex3 = /(\d{2})[\/-](\d{2})[\/-](\d{4})/g;
// const formattedData = text3.replace(regex3, "$3-$2-$1");
// console.log(formattedData);

// // Email Matching
// const text4 =
//   "You can email me at example@example.com or contact support@website.org.";
// const regex4 = /\b[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}\b/g;
// const matches = text4.matchAll(regex4);
// for (const match of matches) {
//   console.log(match[0]);
// }

// // Phone Number Matching
// const text5 =
//   "Call us at (123) 456-7890, or (987) 654-3210. Invalid phone number: 123-45-6789. Another one: (555) 888-0000";
// const regex5 = /\(\d{3}\)\s\d{3}[\-]\d{4}/g;
// console.log(text5.match(regex5));

// // User Data Matching
// const text6 =
//   "User: John Doe, Age: 29, Email: john.doe123@example.com, Phone: +1-555-123-4567, Address: 123 Main St, Apt 4B, Cityville";
// const regex6 = /\s\d+([a-zA-Z\s]+),\s([A-Za-z0-9\s]+),\s([a-zA-Z\s]+)/g;
// console.log(text6.match(regex6));

const text =
  "[2024-02-11 14:32:10] [INFO] User: johndoe123 IP: 192.168.1.25 - Action: LOGIN_SUCCESS";
const dataRegex = /(\d{4}-\d{2}-\d{2})\s(\d{2}:\d{2}:\d{2})/;
const data = text.match(dataRegex)[0];

const levelRegex = /\[(INFO|WARNING|ERROR)\](?=\sUser)/;
const level = text.match(levelRegex)[1];

const userRegex = /User\:\s([a-z0-9]+)/;
const user = text.match(userRegex)[1];

const ipRegex = /\d{3}\.\d{3}\.\d{1}\.\d{2}/;
const ip = text.match(ipRegex)[0];

const actionRegex = /Action:\s([a-zA-Z_]+)/;
const action = text.match(actionRegex)[1];

const wholeInfo = {
  timestamp: data,
  level: level,
  user: user,
  ip: ip,
  action: action,
};
