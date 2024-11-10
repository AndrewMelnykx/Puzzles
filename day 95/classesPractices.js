class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(`Hello , my name is ${this.name} `);
  }
}
// 2. Inheritance with extends

class Employee extends Person {
  constructor(name, age, jobTitle) {
    super(name, age);
    this.jobTitle = jobTitle;
  }
  describeJob() {
    console.log(`${this.name} works as a ${this.jobTitle}.`);
  }
}

const emp = new Employee("Bob", 35, "Dev");
emp.greet();
emp.describeJob();

// 3. Static Methods for Utility Functions

class MathUtil {
  static add(a, b) {
    return a + b;
  }
}

console.log(MathUtil.add(5, 5));

// 4. Encapsulation with Private Fields

class BankAccount {
  #balance;
  constructor(initialBalance) {
    this.#balance = initialBalance;
  }

  deposit(amount) {
    if (amount > 0) this.#balance += amount;
  }

  getBalance() {
    return this.#balance;
  }
}
const account = new BankAccount(1000);
account.deposit(500);
console.log(account.getBalance());

// 5. Abstract Classes and Polymorphism

class Shape {
  constructor(color) {
    if (new.target === Shape) {
      throw new Error("Can`t initiate an abstract class");
    }
    this.color = "color";
  }
  calculateArea() {
    throw new Error("Method calculateArea() must be implemented!");
  }
}

class Circle extends Shape {
  constructor(radius, color) {
    super(color);
    this.radius = radius;
  }
  calculateArea() {
    return Math.PI * this.radius ** 2;
  }
}
const circle = new Circle(2, "black");
console.log(circle.calculateArea());
