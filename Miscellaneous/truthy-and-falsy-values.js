// Truthy and falsy values are values that behave like true or false in conditions.

if ('hello') {
  console.log('A non-empty string is truthy')
}

if (0) {
  console.log('This will not run')
} else {
  console.log('0 is falsy')
}

const values = [false, 0, '', null, undefined, NaN, 0n]
console.log(values)

// Common falsy values in JavaScript:
// false, 0, -0, '', null, undefined, NaN, 0n
