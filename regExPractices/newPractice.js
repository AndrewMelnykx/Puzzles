// const text =
//   "John's US SSN is 123-45-6789, while Maria's SSN is 987-65-4321. Tom's UK National Insurance number is AB123456C, and Ahmed's Egyptian ID is 12345678901234. Li Wei from China has an ID number 110101198001013456, while Hans's German ID is 0123456789. The French ID number for Pierre is 1 23 45 67 89 01, and for Laura in India, her Aadhar number is 2341 2341 2341. Finally, Oscar from Brazil has CPF 123.456.789-09, and Jamil's Saudi ID is 1234567890123.";
// const regex = /(([A-Z\s]+)?([0-9-.]+)\s?([0-9-.]+))/g;

// const regex = /([A-Z]{1,3}[0-9]{1,}|[0-9 .-]{5,}[0,9])/g;
// console.log(text.match(regex));

const text =
  "John lives at 123 Main St, Springfield, IL 62701, while Maria's address is 456 Oak Rd., New York, NY 10001. Tom recently moved to Flat 5B, 22 Baker Street, London W1U 3BW. Ahmed's residence is in 15 El-Tahrir Square, Cairo 11511. Li Wei's home is at No. 8, Zhongshan Road, Shanghai 200010, China. Hans is registered at Hauptstraße 45, 10115 Berlin, Germany. Pierre's French address is 14 Rue de Rivoli, 75001 Paris. Laura from India lives at 32/1 MG Road, Bengaluru 560001. Oscar's place is at Av. Paulista, 1578, São Paulo - SP, 01310-200. Jamil's Saudi address is P.O. Box 7890, Riyadh 11432, Saudi Arabia. Carmen in Spain stays at Flat 8, River Oaks 23/2, 28013 Madrid. Luca's home in Italy: 00184 Rome, Via Roma 42. Ivan's Russian address is кв.5, д.10, ул. Ленина, Moscow, 123456. Emily from Australia is at NSW 2026, 14 Bondi Beach Rd, Sydney. Ahmed in UAE: Apartment 304, Building 7, Sheikh Zayed Rd, Dubai.";

const districtPattern = `(\\b(?:Flat|Apartment|Unit|Suite|Building|P\\.O\\.\\s?Box|No|Block)\\s?[A-Za-z0-9/]*|[0-9]+\\s[A-Za-z.-]+(?:\\s[A-Za-z.,]+)?`;
const regionPattern = `(\\s?,?\\s?(?:[A-Z]{2}\\s[0-9]{5}|[A-Z]{1}[0-9A-Z]{2}\\s?[0-9A-Z]{3}))`;

const cityPattern = `(\\s?[A-Z][a-z]+\\s?([A-Z][a-z]+)?))`;

const firstPartPattern = `${districtPattern}${cityPattern}${regionPattern}`;
const regex = new RegExp(firstPartPattern, "gi");

console.log(text.match(regex));
