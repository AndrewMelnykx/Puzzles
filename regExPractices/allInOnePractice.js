const data = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Data Extraction Example</title>
</head>
<body>
  <h1>IP Addresses</h1>
  <p>192.168.1.1 (valid)</p>
  <p>999.999.999.999 (invalid)</p>

  <h2>Email Addresses</h2>
  <p>john.doe@gmail.com (valid)</p>
  <p>john..doe@gmail.com (invalid)</p>

  <h3>Phone Numbers</h3>
  <p>123-456-7890 (valid)</p>
  <p>12-3456-789 (invalid)</p>

  <h4>MAC Addresses</h4>
  <p>3A:F5:BC:9D:7E:21 (valid)</p>
  <p>GG:1A:2B:3C:4D:5E (invalid)</p>
</body>
</html>`;

// Correct IP regex string for IPv4
const ipRegex =
  "\\b((25[0-5]|2[0-4]\\d|[01]?\\d?\\d)\\.){3}(25[0-5]|2[0-4]\\d|[01]?\\d?\\d)\\b";

const emailRegex = "\\b([A-Za-z0-9]+@[a-z]{2,6}(?:\\.[a-z]{2,6})+)\\b";
const phoneRegex = "\\b\\+?[0-9\\s\\(\\)\\-]{10,}[0-9]\\b";
const macRegex = "\\b((?:[0-9A-Fa-f]{2}(\\:|\\-)){5}[0-9A-Fa-f]{2})\\b";

const regexesInString = `${ipRegex}|${emailRegex}|${[phoneRegex]}|${macRegex}`;

const allRegexes = new RegExp(regexesInString, "gi");

console.log(data.match(allRegexes));
