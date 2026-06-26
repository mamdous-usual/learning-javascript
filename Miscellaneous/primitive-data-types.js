// Primitive data types store a single value.

const name = 'Aman'        // string
const age = 21             // number
const isActive = true      // boolean
const nothing = null       // null
let notDefined             // undefined
const bigNumber = 123n     // bigint
const symbolId = Symbol('id') // symbol

console.log(name, age, isActive, nothing, notDefined, bigNumber, symbolId)

// Primitive values are copied by value.
const x = 10
const y = x
console.log(x, y)
