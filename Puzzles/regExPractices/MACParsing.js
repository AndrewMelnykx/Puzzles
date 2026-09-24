const text = `Rebooted, device 3A:F5:BC:9D:7E:21 responded, another failed 3A:F5:BC:9D:7E."
"Backup unit 00-1A-2B-3C-4D-5E worked fine."
"Maintenance flagged GG:1A:2B:3C:4D:5E, another unit FF-FF-FF-FF-FF-FF operational."
"Invalid MAC 1G:2H:3I:4J:5K:6L detected.`;

// const regex = `([A-F]{1}\:([A-Z]{1}|[0-9]{1}){5})`;
// const regex = `(?:[0-9A-Fa-f]{2}:){5}[0-9A-Fa-f]{2}`;

const regex = `((?:[0-9A-Fa-f]{2}(\\:|\\-)){5}[0-9A-Fa-f]{2})`;

const wholeGroupRegex = new RegExp(regex, "gi");

console.log(text.match(wholeGroupRegex));
