// 1) Methodology of  working
// Say scram , with deploy predeploy , meets , Deadlines

// 2) Type of company , team
// Say i wanna be in team with  more expirienced co-worker fr dev , to gain from him new

// 3) If you have an argument with your team about your ideas or implementation
// You have to disucss and if team and ect inst on your  side , than fix all features before

// 4) How browser works ?
// When we write inside search line it completes http request to the server , and if its okay , server returns to us html
//  code which will be rendered

// 5) For what it servers (browser)?
// It server for convenient data presenting for user from any remote database servers .

// 6) How does rendering work
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

// 12) What is object in js ?
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

// 15) Did you use any custom methods except we were speaking above , for deep obj copying?
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

// 17) Spread and rest operator , in js , where we can use it ?
// | Operator         | Purpose                        | Example                                   |
// | ---------------- | ------------------------------ | ----------------------------------------- |
// | **Spread** `...` | Expands iterable into elements | `[...arr]`, `func(...args)`, `{...obj}`   |
// | **Rest** `...`   | Collects multiple elements     | `function(...args)`, `const [a, ...rest]` |

// 18) Promises and their methods?
// Core states of a Promise:
// Pending — initial state, neither fulfilled nor rejected.
// Fulfilled (Resolved) — operation completed successfully.
// Rejected — operation failed.

// 19) On pure js + css how do you create a  modal window ?

// Use CSS classes to toggle modal visibility.

// Use JS event listeners (onclick) to add/remove those classes.

// Keep modal hidden by default and show it when triggered.

// 20) Event delegation
// If you want to stop the event from bubbling up to parents, use stopPropagation().

// 21) Programming patterns that you know/used?
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
// STRATEGY  is when we reuse one class or function (a strategy) inside another bigger class (a context),
// and adjust behavior by changing the strategy, not the whole class.
// OBSERVER is when objects subscribes to events which happen with  others objects

// 22) Best practices in pure JS for a newbie?
//  I will say SOLID + programming patterns  and deviding into small but well structured modules ,
//   variable names are also important

// 23) What is polyfills?
// A polyfill is a piece of code (usually JavaScript) that adds support for modern
// features in older browsers that don't natively support them.

// 24) Which life cycles in React do you know?
// | Phase           | Class Component Method              | Function Component (Hook Equivalent)           | Description                                                                 |
// |----------------|--------------------------------------|------------------------------------------------|-----------------------------------------------------------------------------|
// | **Mounting**   | `constructor()`                      | N/A                                            | Initialize state and bind methods.                                          |
// |                | `static getDerivedStateFromProps()`  | N/A or `useEffect` with props                 | Sync state with props. Rarely needed.                                       |
// |                | `render()`                           | JSX return in function                         | Defines the UI output.                                                      |
// |                | `componentDidMount()`                | `useEffect(() => {...}, [])`                   | Runs after first render (good for fetching data).                           |
// | **Updating**   | `static getDerivedStateFromProps()`  | `useEffect` with prop/state deps              | Called before every render when props/state change.                         |
// |                | `shouldComponentUpdate()`            | `React.memo()` + custom compare                | Allows skipping re-render if props/state unchanged.                         |
// |                | `render()`                           | JSX return in function                         | Re-renders on state/prop change.                                            |
// |                | `getSnapshotBeforeUpdate()`          | `useLayoutEffect` (rarely used)                | Captures DOM info before update (e.g., scroll).                             |
// |                | `componentDidUpdate()`               | `useEffect(() => {...}, [deps])`               | Called after every update.                                                  |
// | **Unmounting** | `componentWillUnmount()`             | `useEffect(() => {...; return () => {...}}, [])` | Cleanup tasks: timers, listeners, etc.                                  |
// | **Error**      | `static getDerivedStateFromError()`  | `ErrorBoundary` component                      | Updates state when a descendant throws.                                     |
// |                | `componentDidCatch()`                | `ErrorBoundary` + logging                      | Catch and handle errors from children.                                      |

// 25) The best way to do a server request(For instance you have component and it needs to request an array of users)?
//I guess the best way is to use middleware , if you have big app , if you don`t than use simple
// useEffect with axios instance and try/catch block

// 26) What is controlled and uncontrolled components in react?
// Long story short:
// Controlled = components where React controls the value via state (e.g., input, textarea, select).
// Uncontrolled = components where the DOM manages the state, accessed via refs (e.g., <input ref={...} />).

// 27) Which libraries do you use with react forms?
// I used zod with next js , and react form hook

// 28) And in which cases you can use one or anotehr (about controlled and uncontrolled components)?
// Controlled Components: Used when you need to track and manage the input value, or handle user interactions.
// Example: A search input where you want to track what the user types, validate it, and respond
// to changes instantly (e.g., filtering search results).

// Uncontrolled Components: Used when you don't need to track the value actively or handle user input directly via React state.
// Example: A situation where you're using a button to add an item to the cart — no need to directly manage the
// input state, but you might access its value on a form submit using `useRef`.

// 29) Batching in react?
// So batching it is when we have function to change the color of the modal, and also make close button visible ,
// react will do one render with reading scrypt of the function to the end rather rerender twice ?
// const handleOpenModal = () => {
//   setColor("blue");               // 1st state update
//   setIsCloseVisible(true);        // 2nd state update
//   // React batches both — one re-render only
// };

// 30) Methods of optimisation in React ?
// | **Category**                   | **Method / Tool**                             | **Purpose**                                               |
// |-------------------------------|-----------------------------------------------|-----------------------------------------------------------|
// | ✅ Memoization                | `useMemo`                                     | Memoize expensive calculations                            |
// |                               | `useCallback`                                 | Memoize functions to avoid re-creation                    |
// |                               | `React.memo`                                  | Prevent unnecessary re-renders of components              |
// | ✅ Code Splitting             | `React.lazy` + `Suspense`                     | Load components only when needed (lazy loading)           |
// | ✅ Virtualization             | `react-window`, `react-virtualized`           | Efficient rendering of large lists                        |
// | ✅ Avoid Re-renders           | Proper list `key`s                            | Helps React track elements efficiently                    |
// |                               | Avoid inline functions/objects in props       | Prevent unnecessary renders                               |
// |                               | `PureComponent`, `React.memo`                 | Shallow prop/state comparison to skip renders             |
// | ✅ Data Fetching              | `SWR`, `React Query`, `localStorage`          | Cache & reuse fetched data                                |
// |                               | Debounce / Throttle                           | Avoid frequent state updates (e.g., in search input)      |
// | ✅ SSR / SSG                  | Next.js SSR / SSG                             | Improve load speed & SEO by rendering on the server       |
// | ✅ Concurrent Features        | `useTransition`                               | Prioritize urgent vs non-urgent updates                   |
// |                               | `useDeferredValue`                            | Defer less important updates                              |
// | ✅ Bundle Optimization        | Tree shaking, compress assets                 | Reduce app size, improve load times                       |

// 31) What is debounce ?
// Debounce is a technique used to limit how often a function runs.Trigger after using

// 32) What is throttling?
// Throttling is a technique to control how often a function can be called over time.
// Unlike debounce (which waits), throttle allows a function to run at most once every X milliseconds,
// no matter how often it's triggered.

//33)SSR , Next.js , how it works?
// SR (Server-Side Rendering) in Next.js means that the HTML is generated on the server
// at the time of the request, not in the user's browser.
//
// ✅ In traditional React (CSR):
// - The browser downloads a mostly empty HTML file
// - Then React loads, runs JavaScript, and builds the UI on the client side
//
// ✅ In SSR (e.g., with Next.js):
// - When a user visits a page, Next.js runs the page's code on the server
// - The server renders the React component to HTML
// - That HTML is sent to the browser, so the user sees the content immediately
// - Afterward, React "hydrates" it — attaches event listeners and makes it interactive

// 34) What is virtualization in react?
// / Virtualization is a technique used to efficiently render large lists or grids in React.
// Instead of rendering the entire list in the DOM (which can be slow and memory-heavy),
// it renders only the visible items, plus a small buffer.

// 35) Patterns in react ?
// | Pattern                     | Description                                                                 |
// |-----------------------------|-----------------------------------------------------------------------------|
// | Presentational / Container  | Split UI (presentational) from logic (container/state) components           |
// | Higher-Order Component (HOC)| A function that takes a component and returns a new component with added logic|
// | Render Props                | A technique where a component’s child is a function to control rendering     |
// | Compound Components         | Components that work together through implicit state sharing via context     |
// | Controlled vs Uncontrolled  | Controlled uses React state; uncontrolled uses ref for DOM-based state       |
// | Hooks                       | Custom logic extracted into reusable functions (custom hooks)               |
// | Context Provider Pattern    | Share global state (like theme/auth) via React Context                      |
// | State Reducer Pattern       | A pattern for managing complex local state (similar to Redux reducer logic) |
// | Slot/Children Pattern       | Allow flexible content composition via props.children                       |
// | Error Boundaries            | Special components to catch and handle rendering errors in child components  |
// | Lazy Loading / Suspense     | Load components or data on demand to optimize performance                   |

// 36) What is reactivity in React , how do you understand it ?
// Reactivity in React means the UI automatically updates when the underlying data (state or props) changes.
//
// When state or props change, React “reacts” by re-rendering components to reflect the new data.
// This allows building dynamic and interactive user interfaces without manually manipulating the DOM.
//
// Reactivity involves concepts like:
// - State and props triggering renders
// - Efficient updates with reconciliation and memoization
// - Using hooks to manage side effects and data fetching

// 37) SOLID ?
// S	Single Responsibility	A class/module should have only one reason to change (one responsibility).
// O	Open/Closed	Software entities should be open for extension, but closed for modification.
// L	Liskov Substitution	Objects of a superclass should be replaceable with objects of a subclass without breaking the app.
// I	Interface Segregation	Clients should not be forced to depend on interfaces they don't use (many small interfaces better than one big).
// D	Dependency Inversion	Depend on abstractions, not on concrete implementations.

// 38) Difference between types  and interfaces ?
// ✅ `interface`
// - Can be **extended** using `extends`
// - Can be **merged** (declaration merging)
// - Primarily used for object shapes (especially in OOP-style code)

// ✅ `type`
// - More **flexible** (can represent unions, tuples, primitives, etc.)
// - Cannot be merged
// - Use when combining types or working with more complex structures
