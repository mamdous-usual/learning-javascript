// Function currying means converting a function that takes many arguments
// into a chain of functions that take one argument at a time.

function add(a) {
  return function (b) {
    return function (c) {
      return a + b + c
    }
  }
}

console.log(add(2)(3)(4)) // 9

function multiply(a) {
  return function (b) {
    return a * b
  }
}

console.log(multiply(5)(6)) // 30
