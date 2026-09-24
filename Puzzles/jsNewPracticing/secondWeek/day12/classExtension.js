class A {
  constructor() {
    console.log(new.target.name);
  }
}

class B extends A {}

new A();
new B();
