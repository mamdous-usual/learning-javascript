// The typeof operator returns the type of a value as a string.

console.log(typeof 10)           // number
console.log(typeof 'JavaScript') // string
console.log(typeof true)         // boolean
console.log(typeof undefined)    // undefined
console.log(typeof null)         // object (this is a long-standing JavaScript quirk)
console.log(typeof {})           // object
console.log(typeof [])           // object
console.log(typeof function () {}) // function

// Use typeof when you want to check the basic type of a value.
