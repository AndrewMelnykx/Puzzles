// const text =
//   "Hello Mike. Here is my phone number +38 (098) 330-00-03, +380993330-00-03, +2342342344233 my wife phone number 068-339-09-09 and 920462 my sun number 0683390791. Please use same country code +38 to have opportunity to call me";

// const regex = /(\+?[0-9\s]+)([0-9-()]+)\s?([0-9-]+)/g;

// console.log(text.match(regex));

// const text =
//   "Hello Mike. Here is my phone number +38(098)330-00-03, +380993330-00-03, +2342342344233 my wife phone number 068-339-09-09 and 920462 my sun number 0683390791. You can reach me at jane_doe!tech+info@web.example.com or contact me at 'work_account@sub-domain3.xyz'. For backup, try 'john.doe_99+filter@mail-server.io' or 'contact@sub.domain.co.uk'. Please use the same country code +38 to have the opportunity to call me.";

// const regex =
//   /(\+?[0-9\s]+)([0-9-()]+)\s?([0-9-]+)|[a-zA-Z0-9._%+-]+@[a-zA-Z0-9._%+-]+\.[a-z]{2,}/g;

// console.log(text.match(regex));

// const text =
//   "Allowed: 192.168.1.1, Deny: 256.0.0.1, Strange: 10.000.10.1, Hidden: 8.8.8.8, Weird: 172.16..30.5 857623 298977";

// // const regex =
// //   /((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)/g;

// const regex =
// /((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3})/

// console.log(text.match(regex));

const billData = `
Company Name: ABC Energy Services 
Account Holder: John Doe
Account Number: A12345B6789
Billing Period: 2025-01-01 to 2025-01-31
Meter Reading (Start): 25000 kWh
Meter Reading (End): 25500 kWh
Usage: 500 kWh
Rate: $0.12 per kWh
Charges:
  Energy Usage: $60.00
  Taxes: $3.60
  Late Fee: $5.00
  Adjustment: -$2.00
Total Amount Due: $66.60
Due Date: 2025-02-15
Payment Status: UNPAID
Contact Number: 1-800-123-4567
`;

const datePattern = `([1-2](9|0)[0-9]{2})-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])`;
const nameAndSurnamePattern = `([A-Z][a-z]{1,6})`;
const metersPattern = `([1-9][0-9]{4}\\s?[a-z][A-Z][a-z])`;

const regexNameSol = new RegExp(
  `(Company Name:\\s[^\\n\\r]+|Account Number:\\s[A-Z]\\d{5}[A-Z]\\d{4}|Billing Period:\\s${datePattern}\\s?to\\s?${datePattern}|Account Holder:\\s?${nameAndSurnamePattern}\\s${nameAndSurnamePattern})
  |Meter Reading \\(Start\\):\\s?${metersPattern}|Meter Reading \\(End\\):\\s?${metersPattern}`,
  "g"
);

const matches = [...billData.matchAll(regexNameSol)].map((match) => match[0]);

console.log(matches);

// const chargeItemPattern = /^\s*([A-Za-z\s]+):\s?\$([0-9,.-]+)\s*$/gm;

const chargeItemPattern =
  /^\s*?([A-Z][a-z]+)\s?([A-Z][a-z]+)?:\s*\-?\$([0-9.]+[0-9]{2})/gm;

const chargesMatch = [...billData.match(chargeItemPattern)];

const chargesItems = chargesMatch.map((match) => ({
  category1: match[1],
  category2: match[2] || "",
  amount: match[3],
}));

console.log(chargesItems);
