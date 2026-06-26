// Array.isArray() checks whether a value is an array.

console.log(Array.isArray([1, 2, 3])) // true
console.log(Array.isArray('hello'))    // false
console.log(Array.isArray({}))         // false

const values = [1, 2, 3]
if (Array.isArray(values)) {
  console.log('values is an array')
}

// Prefer Array.isArray() over typeof when checking arrays.
