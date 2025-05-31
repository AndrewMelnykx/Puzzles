// 1) Methodology of  working
// Say scram , with deploy predeploy , meets , Deadlines

// 2) Type of company , team
// Say i wanna be in team with  more expirienced co-worker fr dev , to gain from him new

// 3)If you have an argument with your team about your ideas or implementation
// You have to disucss and if team and ect inst on your  side , than fix all features before

// 4) How browser works ?
// When we write inside search line it completes http request to the server , and if its okay , server returns to us html code which will be rendered

// 5) For what it servers (browser)?

// It server for convinient data presenting for user from any remote database servers .

// 6) How rendering works

// We receive html code from server ,then browser parse it and turn into DOM, then it creates a rendering tree , after that it calculates sizes of positioning ,
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
// If script doesnt inflcit on UI we might use async but if it is then defer suits well

// 9) If youre creating a brand new project , without frame works and even js , what is your best pratices for that reason.

// First of all i will think about architecture of the project , then about team preferenes , if im alone then mine preferences such as:

// prettier, eslint ,dependencies,
// then css or scss , modular or not (explain to me the difference)

// 10) Arrow funcs and their meaning
// Also called lambda funcs, its a functions created from a const, the main difference between regular funcs , is that they dont have their own .this context
// means they use this from context where they curently are
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

// 15)Did you use any custom methods except we were speking above , for deep obj copying?
//  Custom method is use plain recursion until obj will be empty

// 16) Difference between mutable and unmutable array methods in js ?

// Examples of mutable methods:                         Examples of immutable methods:
// .push() — add items at the end
// .map() — create a new array by transforming elements
// .pop() — remove the last item
// .filter() — create a new array with filtered elements
// .shift() — remove the first item
// .slice() — create a shallow copy or extract part of array
// .unshift() — add items at the start
// .splice() — add/remove items anywhere
// .sort() — sort the array in place
// .sort() — sort the array in place
// .reverse() — reverse the array in place                // .concat() — merge arrays into a new one
// .reduce() — reduce to a single value (doesn’t modify original)

// .includes(), .indexOf() — search without modifying

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
