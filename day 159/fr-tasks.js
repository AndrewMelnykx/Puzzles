// 1) Methodology of  working
// Say scram , with deploy predeploy , meets , Deadlines

// 2) Type of company , team
// Say i wanna be in team with  more expirienced co-worker fr dev , to gain from him new

// 3)If you have an argument with your team about your ideas or implementation
// You have to disucss and if team and ect inst on your  side , than fix all features before

// 4) How browser works ?
// When we write inside search line it completes http request to the server , and if its okay , server returns to us html
//  code which will be rendered

// 5) For what it servers (browser)?

// It server for convinient data presenting for user from any remote database servers .

// 6) How rendering works

// We receive html code from server ,then browser parse it and turn into DOM, then it creates a rendering tree ,
// after that it calculates sizes of positioning ,
// Painting
// The browser paints pixels to the screen — text, colors, images, etc.

// Compositing
// For layered elements (e.g. with z-index, transforms), it composites them in the correct order to display the final image.

// Handle JavaScript (Event Loop, Async)
// While all this is happening:

// JavaScript runs in the main thread.

// Scripts might block rendering (unless they're async or defer).

// The event loop processes asynchronous callbacks (like events, timers, fetch responses).

// 7) Difference between async and defer
//  Breakdown:
// async → runs as soon as it’s ready, can interrupt parsing.

// defer → runs after parsing completes, never blocks HTML.

// 8) For what we use one instead another ?
// If script doesnt inflict on UI we might use async but if it is then defer suits well

// 9) If youre creating a brand new project , without frame works and even js , what is your best practices for that reason.

// First of all i will think about architecture of the project , then about team preferences , if im alone then mine preferences such as:

// prettier, eslint ,dependencies,
// then css or scss , modular or not (explain to me the difference)

// 10) Arrow funcs and their meaning
// Also called lambda funcs, its a functions created from a const, the main difference between regular funcs , is that they dont have
// their own .this context
// means they use this from context where they currently are
// arrow cant be construction funcs , and they dont  have keyword arguments

// 11) Do we can use bind call and apply with arrow func ?
// No because it doesnt have its own this context

// 12)What is object in js ?
// so object is a non primitive type of data in js which structured from collections of key value pairs ?

// // 13) Then what an array is in js?
// An array is a non-primitive data type in JavaScript that stores an ordered collection of elements.
// The elements are accessed by numeric indices starting from 0, and arrays do not require explicit key-value pairs like objects do.

// 14) How do we can copy an obj?
// We can copy it with a spread operator , and Object assign , for deep copy json parse + json stringify
// const deepCopy = JSON.parse(JSON.stringify(original));
// const deepCopy = structuredClone(original);
// const _ = require('lodash');
// const deepCopy = _.cloneDeep(original);

// 15)Did you use any custom methods except we were speaking above , for deep obj copying?
//  Custom method is use plain recursion until obj will be empty

// 16) Difference between mutable and immutable array methods in js ?

// | Method              | Type       | Purpose                                           | Example                             |
// | ------------------- | ---------- | ------------------------------------------------- | ----------------------------------- |
// | `.push()`           | Mutable    | Adds element(s) to the end of the array           | `arr.push(4)`                       |
// | `.pop()`            | Mutable    | Removes the last element                          | `arr.pop()`                         |
// | `.shift()`          | Mutable    | Removes the first element                         | `arr.shift()`                       |
// | `.unshift()`        | Mutable    | Adds element(s) to the beginning                  | `arr.unshift(0)`                    |
// | `.splice()`         | Mutable    | Adds/removes elements at a specific index         | `arr.splice(1, 1, 'x')`             |
// | `.sort()`           | Mutable    | Sorts the array in place                          | `arr.sort()`                        |
// | `.reverse()`        | Mutable    | Reverses the array in place                       | `arr.reverse()`                     |
// | `.map()`            | Immutable  | Transforms each element, returns a new array      | `arr.map(x => x * 2)`               |
// | `.filter()`         | Immutable  | Filters elements based on a condition             | `arr.filter(x => x > 0)`            |
// | `.slice()`          | Immutable  | Returns a portion of the array                    | `arr.slice(1, 3)`                   |
// | `.concat()`         | Immutable  | Combines arrays into a new one                    | `arr.concat([4, 5])`                |
// | `.reduce()`         | Immutable  | Reduces array to a single value                   | `arr.reduce((a, b) => a + b, 0)`    |
// | `.includes()`       | Immutable  | Checks if value exists in array                   | `arr.includes(2)`                   |
// | `.indexOf()`        | Immutable  | Finds index of value in array                     | `arr.indexOf(3)`                    |

// 17)spread and rest operator , in js , where we can use it ?

// | Operator         | Purpose                        | Example                                   |
// | ---------------- | ------------------------------ | ----------------------------------------- |
// | **Spread** `...` | Expands iterable into elements | `[...arr]`, `func(...args)`, `{...obj}`   |
// | **Rest** `...`   | Collects multiple elements     | `function(...args)`, `const [a, ...rest]` |

// 18)Promises and their methods?
// Core states of a Promise:
// Pending — initial state, neither fulfilled nor rejected.
// Fulfilled (Resolved) — operation completed successfully.
// Rejected — operation failed.

// 19)On pure js + css how do you create a  modal window ?

// Use CSS classes to toggle modal visibility.

// Use JS event listeners (onclick) to add/remove those classes.

// Keep modal hidden by default and show it when triggered.

// 20) Event delegation
// If you want to stop the event from bubbling up to parents, use stopPropagation().

// 21)Programming patterns that you know/used?

// Creational : Singletone, Builder,Factory
//Structural pattern : Facade, Adapter
//Behavioral:Strategy,Observer

// Example creational:
// SINGLETONE is axios instance and next reuse it for child requests
//   BUILDER  when we use class to create a building template like request below
// FACTORY Switch case with type of new object we need and then useFactory.("typeOfObject",... extra data)

// Example structural:
// FACADE is a design pattern where a class provides a simplified and unified interface to a set of more complex subsystems or functions.
// It hides the complexity by exposing a small, easy-to-use API.
// ADAPTER is a function or class that transforms data or behavior from one format/interface into another so it can be
// reused or integrated with other parts of the system.
// STRATEGY Strategy is when we reuse one class or function (a strategy) inside another bigger class (a context),
// and adjust behavior by changing the strategy, not the whole class.
