// A deep copy creates a completely independent copy, including nested values.

const original = {
  name: 'Aman',
  address: {
    city: 'Delhi',
  },
  skills: ['JS', 'React'],
}

const deepCopy = structuredClone(original)
deepCopy.address.city = 'Mumbai'
deepCopy.skills.push('Node')

console.log(original.address.city) // Delhi
console.log(original.skills)       // ['JS', 'React']
console.log(deepCopy)

// structuredClone is the simplest built-in deep copy option in modern JavaScript.
