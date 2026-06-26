// null, undefined, and not defined are different in JavaScript.

let a = null
let b

console.log(a) // null: intentionally empty value
console.log(b) // undefined: variable declared but not assigned

try {
  console.log(c) // ReferenceError: c is not defined
} catch (error) {
  console.log('c is not defined')
}

// null is assigned by the developer.
// undefined usually means a value was not provided.
// not defined means the variable does not exist in scope.
