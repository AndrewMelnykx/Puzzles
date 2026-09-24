let Person = class {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
};

const person = new Person("Learn", "Javascript");

console.log(person.name);
