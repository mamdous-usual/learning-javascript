// A shallow copy copies only the first level.
// Nested objects or arrays still share the same reference.

const original = {
  name: 'Aman',
  address: {
    city: 'Delhi',
  },
}

const copy = { ...original }
copy.name = 'Ravi'
copy.address.city = 'Mumbai'

console.log(original.name)          // Aman
console.log(original.address.city)  // Mumbai because nested object is shared

const list = [1, 2, [3, 4]]
const listCopy = [...list]
listCopy[0] = 99
listCopy[2][0] = 300

console.log(list) // [1, 2, [300, 4]]
