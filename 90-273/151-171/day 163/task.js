let emails = [
  "test.email+alex@leetcode.com",
  "test.e.mail+bob.cathy@leetcode.com",
  "testemail+david@lee.tcode.com",
];

var numUniqueEmails = function (emails) {
  let unique = new Set();

  emails.forEach((email) => {
    let [local, domain] = email.split("@");
    local = local.split("+")[0].replace(/\./g, "");
    unique.add(local + "@" + domain);
  });

  return unique.size;
};
let result = numUniqueEmails(emails);

console.log(result);
