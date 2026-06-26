# JavaScript Cheat Sheet

A compact revision guide for JavaScript fundamentals, written as study notes for quick review.

## 1. What JavaScript Is

JavaScript is a high-level, interpreted, dynamic language used to build interactive web pages, server-side apps, APIs, and automation scripts.

Core ideas:
- It is single-threaded but can handle asynchronous tasks.
- It supports both functional and object-oriented styles.
- It uses prototype-based inheritance.
- It is dynamically typed, so variable types can change at runtime.

## 2. Variables

JavaScript has three main ways to declare variables:

- `var`: function-scoped, can be redeclared and updated, hoisted with `undefined`.
- `let`: block-scoped, can be updated, cannot be redeclared in the same scope.
- `const`: block-scoped, cannot be reassigned after initialization.

Example:

```js
let name = "Ali";
const age = 25;
var city = "Lahore";
```

Rules:
- Use `const` by default.
- Use `let` when the value must change.
- Avoid `var` in modern code.

## 3. Data Types

Primitive types:
- `string`
- `number`
- `bigint`
- `boolean`
- `undefined`
- `null`
- `symbol`

Non-primitive types:
- `object`
- `array`
- `function`

Examples:

```js
let text = "hello";
let count = 10;
let isReady = true;
let emptyValue = null;
let notAssigned;
```

Important notes:
- `typeof null` returns `"object"` because of a JavaScript quirk.
- Arrays are objects, but they are used as ordered lists.
- Functions are also objects.

## 4. Operators

Arithmetic:
- `+`, `-`, `*`, `/`, `%`, `**`

Assignment:
- `=`, `+=`, `-=`, `*=`, `/=`

Comparison:
- `==` compares values with type coercion.
- `===` compares values and types.
- `!=` and `!==` are the opposite checks.
- Prefer `===` and `!==`.

Logical:
- `&&` means and
- `||` means or
- `!` means not

Other useful operators:
- `? :` ternary operator
- `typeof` to check a type
- `instanceof` to check object type relationships

## 5. Strings

Useful string features:
- Concatenation with `+`
- Template literals with backticks
- String length with `.length`
- Accessing characters with bracket notation
- Common methods like `.toUpperCase()`, `.toLowerCase()`, `.trim()`, `.slice()`, `.replace()`, `.includes()`

Example:

```js
const firstName = "Sara";
const message = `Hello, ${firstName}`;
```

## 6. Arrays

Arrays store ordered collections.

Create arrays:

```js
const numbers = [1, 2, 3, 4];
const mixed = [1, "hello", true];
```

Common methods:
- `.push()` adds to end
- `.pop()` removes from end
- `.shift()` removes from start
- `.unshift()` adds to start
- `.slice()` returns part of an array
- `.splice()` changes the original array
- `.indexOf()` finds a value
- `.includes()` checks if a value exists
- `.join()` converts array to string
- `.concat()` combines arrays

Modern array methods:
- `.map()` transforms each item
- `.filter()` keeps matching items
- `.find()` returns the first matching item
- `.findIndex()` returns index of first match
- `.some()` checks if at least one item matches
- `.every()` checks if all items match
- `.reduce()` reduces array to a single value

Example:

```js
const doubled = [1, 2, 3].map((num) => num * 2);
```

## 7. Objects

Objects store key-value pairs.

Example:

```js
const student = {
  name: "Amina",
  age: 21,
  isActive: true,
};
```

Access properties:
- Dot notation: `student.name`
- Bracket notation: `student["name"]`

Useful object ideas:
- Add new properties by assignment.
- Delete properties with `delete`.
- Loop with `for...in`.
- Use `Object.keys()`, `Object.values()`, and `Object.entries()`.

## 8. Conditional Logic

Use conditions to control flow.

### if, else if, else

```js
if (score >= 80) {
  console.log("A");
} else if (score >= 60) {
  console.log("B");
} else {
  console.log("Needs improvement");
}
```

### Ternary operator

```js
const result = age >= 18 ? "Adult" : "Minor";
```

### Switch

Use `switch` when comparing one value against many cases.

### Truthy and Falsy

Falsy values:
- `false`
- `0`
- `-0`
- `0n`
- `""`
- `null`
- `undefined`
- `NaN`

Everything else is truthy.

## 9. Loops

### for loop

```js
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

### while loop

Runs while the condition is true.

### do...while

Runs at least once before checking the condition.

### for...of

Used for iterable values like arrays and strings.

### for...in

Used for object keys.

Best practice:
- Use `for...of` for arrays.
- Use `for...in` for objects.

## 10. Functions

Functions are reusable blocks of code.

### Function declaration

```js
function greet(name) {
  return `Hello, ${name}`;
}
```

### Function expression

```js
const greet = function (name) {
  return `Hello, ${name}`;
};
```

### Arrow function

```js
const greet = (name) => `Hello, ${name}`;
```

Function basics:
- Parameters are placeholders.
- Arguments are actual values passed in.
- `return` sends a value back from the function.
- Functions without `return` return `undefined`.

## 11. Scope and Hoisting

### Scope

- Global scope: accessible everywhere.
- Function scope: accessible inside a function.
- Block scope: accessible inside `{}` with `let` and `const`.

### Hoisting

- Function declarations are hoisted.
- `var` declarations are hoisted but initialized as `undefined`.
- `let` and `const` are hoisted but stay in the temporal dead zone until declared.

## 12. Closures

A closure happens when a function remembers variables from its outer scope even after the outer function has finished.

Example idea:
- Inner functions can access outer variables.
- Useful for data privacy, counters, and function factories.

## 13. Higher-Order Functions

A higher-order function is a function that:
- Takes another function as an argument, or
- Returns a function

Examples:
- `map`
- `filter`
- `reduce`
- custom callback-based functions

## 14. Functional Programming Notes

Functional programming focuses on small, reusable, predictable functions.

Key ideas:
- Prefer pure functions.
- Avoid mutating data when possible.
- Keep functions focused on one task.
- Use method chaining where it improves readability.

Pure function:
- Same input gives same output.
- No side effects.

Example:

```js
const add = (a, b) => a + b;
```

## 15. ES6 Features

Important ES6 features to remember:

### let and const
Block-scoped variable declarations.

### Arrow functions
Short function syntax.

### Template literals
Use backticks for embedded expressions.

### Destructuring

```js
const person = { name: "Ali", age: 22 };
const { name, age } = person;
```

### Default parameters

```js
function greet(name = "Guest") {
  return `Hello, ${name}`;
}
```

### Spread operator

```js
const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4];
```

### Rest parameter

```js
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
```

### Modules
- `export` shares values from a file.
- `import` brings values into another file.

## 16. Object-Oriented Programming

JavaScript supports OOP through objects, constructors, prototypes, and classes.

### Constructor function

```js
function Student(name, age) {
  this.name = name;
  this.age = age;
}
```

### Prototype

Methods added to a constructor's prototype are shared.

### Class syntax

```js
class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    return `My name is ${this.name}`;
  }
}
```

Important OOP ideas:
- `this` refers to the current object in method calls.
- Inheritance lets one class reuse another's behavior.
- Encapsulation helps keep data and behavior together.
- Polymorphism means similar interfaces can behave differently.

## 17. Asynchronous JavaScript

JavaScript handles delayed work with callbacks, timers, promises, and async/await.

### Callback

A callback is a function passed into another function to run later.

### setTimeout
Runs once after a delay.

### setInterval
Runs repeatedly after a fixed interval.

### Promise
Represents a future value.

Promise states:
- pending
- fulfilled
- rejected

### Promise methods
- `.then()` handles success
- `.catch()` handles errors
- `.finally()` runs after completion

### async/await
A cleaner way to work with promises.

```js
async function getData() {
  try {
    const response = await fetch("https://example.com");
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
```

## 18. Error Handling

Use `try...catch` to handle problems safely.

```js
try {
  JSON.parse("invalid json");
} catch (error) {
  console.log("Something went wrong");
}
```

Notes:
- Use error handling around risky code.
- Do not ignore errors silently.

## 19. Copying Data

### Shallow copy
Copies only the first level.

### Deep copy
Copies nested values too.

Common ways:
- Shallow copy arrays with `slice()` or spread.
- Shallow copy objects with spread or `Object.assign()`.
- Deep copy with `structuredClone()` when available.

## 20. Common Revision Questions

Ask yourself:
- What is the difference between `let`, `var`, and `const`?
- When should I use `map`, `filter`, and `reduce`?
- What is a closure?
- What is the difference between `==` and `===`?
- How do promises work?
- What is the role of `this` in a class or object method?
- What is the difference between a shallow copy and a deep copy?

## 21. Quick Study Summary

- Use `const` and `let` instead of `var`.
- Prefer `===` over `==`.
- Practice arrays, objects, loops, and functions first.
- Learn closures and higher-order functions next.
- Understand ES6 syntax and destructuring.
- Review OOP concepts with classes and prototypes.
- Master promises and async/await for asynchronous code.

## 22. Suggested Revision Order

1. Basics
2. Conditional and Control Statements
3. Functions
4. ES6
5. Functional Programming
6. Object-Oriented Programming
7. Asynchronous JavaScript
8. Miscellaneous
