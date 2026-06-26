// Comparison operators compare two values and return a boolean.

console.log(10 == '10')   // true: checks value only
console.log(10 === '10')  // false: checks value and type
console.log(10 != '10')   // false: loose inequality
console.log(10 !== '10')  // true: strict inequality

console.log(20 > 15)      // true
console.log(20 < 15)      // false
console.log(20 >= 20)     // true
console.log(20 <= 19)     // false

// Prefer strict comparison (=== and !==) in most cases.
