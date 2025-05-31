// const number = 27;

// const newNumber = number;

// const dog = {
//   name: "Buddy",
//   age: 5,
//   breed: "Golden Retriever",
//   activity: "fetching",
//   weight: 30,
// };

// const newDog = dog;

// newDog.weight = 35;

// console.log(dog.weight);

// const fiat = {
//   brand: "Fiat",
//   model: "500 Lounge",
//   year: 2021,
//   mileage: 35000,
//   bodyStyle: "Hatchback",
//   passengers: 4,
// };

// const cadillac = {
//   brand: "Cadillac",
//   model: "XT5",
//   year: 2019,
//   mileage: 65000,
//   bodyStyle: "SUV",
//   passengers: 5,
// };

// const chevrolet = {
//   brand: "Chevrolet",
//   model: "Malibu",
//   year: 2020,
//   mileage: 45000,
//   bodyStyle: "Sedan",
//   passengers: 5,
// };

// year < 2021
// mileage < 50000

// const filterCars = (cars) => {
//   return cars.filter((car) => car.year < 2021 && car.mileage < 50000);
// };
// console.log(filterCars([fiat, cadillac, chevrolet]));

// const dog = {
//   name: "Buddy",
//   age: 5,
//   breed: "Golden Retriever",
//   activity: "fetching",
//   weight: 30,
// };

// const loseWeight = (dog, losingAmount) => {
//   dog.weight = dog.weight - losingAmount;
// };

// loseWeight(dog, 5);
// console.log(dog.weight);

function abc(x, y, z) {
  this.x = x;
  this.y = y;
  this.z = z;
}

var instance = new abc(1, 2, 3);

console.log(instance);

const orgObject = { company: "XYZ Corp" };
const carObject = { name: "Toyota" };
const staff = Object.assign({}, orgObject, carObject);

console.log(staff);
