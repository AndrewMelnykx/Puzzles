// 1. What is Symbol and what does it serve in JavaScript?

// Answer:
// Symbol is a primitive data type introduced in ES6, used to create unique identifiers. Every symbol is guaranteed to be unique, even if they have the same description.

// Use cases:

// Unique object property keys to avoid collisions.

// Hidden/internal properties (not enumerable).

// Well-known symbols for customizing JS behaviors (Symbol.iterator, Symbol.toStringTag).

// Example:

// const ID = Symbol('id');
// const user = { name: 'Alice', [ID]: 123 };
// console.log(user[ID]); // 123
// console.log(Object.keys(user)); // ['name']

// 2. What is hoisting?

// Answer:
// Hoisting is a JS behavior where variable and function declarations are moved to the top of their scope during compilation. Only declarations are hoisted, not initializations.

// Example:

// console.log(a); // undefined
// var a = 5;

// foo(); // Works
// function foo() { console.log('Hi'); }

// bar(); // Error
// var bar = function() { console.log('Hi'); }

// 3. What is scope in JavaScript?

// Answer:
// Scope defines where a variable is accessible:

// Global scope – anywhere in the program.

// Function scope – variables declared with var inside a function.

// Block scope – variables declared with let or const inside {}.

// Example:

// function test() {
//   var x = 1;
//   if (true) {
//     let y = 2;
//   }
//   console.log(x); // 1
//   // console.log(y); // ReferenceError
// }

// 4. Function Declaration vs Function Expression
// Feature	Function Declaration	Function Expression
// Hoisting	Fully hoisted	Only variable name hoisted (undefined)
// Syntax	function foo() {}	const foo = function() {}
// Can be called before define	Yes	No

// Example:

// foo(); // Works
// function foo() { console.log('Hi'); }

// bar(); // Error
// const bar = function() { console.log('Hi'); }

// 5. JS vs Node.js Call Stack

// Answer:

// Both environments are single-threaded, using a call stack.

// Differences:

// Feature	Browser JS	Node.js
// Global Object	window	global
// Event Loop	Handles UI events, timers	Handles I/O, timers, async ops
// Async Tasks	setTimeout, Promises, DOM events	setTimeout, Promises, fs I/O

// Key: Stack behaves the same; async tasks are queued differently based on environment.

// 6. What is a closure?

// Answer:
// A closure is a function that remembers its lexical scope even when executed outside of it.

// Example:

// function outer() {
//   let count = 0;
//   return function inner() {
//     count++;
//     console.log(count);
//   }
// }

// const fn = outer();
// fn(); // 1
// fn(); // 2

// Used for private state and encapsulation.

// 7. Event loop, microtasks, macrotasks (combined example)

// Question: What happens when you mix synchronous code, Promise, async/await, setTimeout, and setInterval?

// Answer:

// console.log('1 - sync start');

// setTimeout(() => console.log('2 - setTimeout 0'), 0);
// setTimeout(() => console.log('3 - setTimeout 50'), 50);

// Promise.resolve().then(() => {
//   console.log('4 - promise1');
//   return Promise.resolve();
// }).then(() => console.log('5 - promise2'));

// async function asyncFunc() {
//   console.log('6 - async start');
//   await Promise.resolve();
//   console.log('7 - async after await');
// }

// asyncFunc();

// setInterval(() => console.log('8 - setInterval'), 0);

// console.log('9 - sync end');

// Execution order:

// 1 - sync start
// 6 - async start
// 9 - sync end
// 4 - promise1
// 5 - promise2
// 7 - async after await
// 2 - setTimeout 0
// 8 - setInterval (repeats)
// 3 - setTimeout 50

// Explanation:

// Synchronous code runs first.

// Microtasks (Promises, await) run after current stack, before macrotasks.

// Macrotasks (setTimeout, setInterval) run after microtasks.

// Chained Promises maintain order in microtask queue.

// This example covers all tricky patterns senior developers expect: sync vs async, microtasks vs macrotasks, nested calls, and interval behavior.

// This is a complete set of Q&A covering your original list plus advanced JS behaviors like event loop patterns.

// I can also make a visual timeline diagram for this last event loop example—it’s extremely helpful for interviews to “draw it on a whiteboard.”

// Do you want me to create that diagram?

// QUESTION ABOUT SPREAD AND REST OPERATOR

// DESTRUCTURING

// DIFFERENCE BETWEEN SOLID METHODS

// Portal in React

// 404 Eror processing method concept in Next.js

// Difference between query selector and id , and difference between css inside elemetn style and otside styles

// HOC and other react conecptions
