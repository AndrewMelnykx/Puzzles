var greeting = "Understanding this keyword!";

const obj = {
  greeting: "Hello world!",
  getGreeting: (greeting) => {
    var greeting = "Hello Ukraine!";
    return this.greeting;
  },
};

console.log(obj.getGreeting("Welcome to JS!"));
