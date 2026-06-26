// Nested functions can form closures at different levels.

function createCounter() {
  let count = 0

  function increment() {
    count += 1

    function logValue() {
      console.log('Current count:', count)
    }

    logValue()
  }

  return increment
}

const counter = createCounter()
counter() // Current count: 1
counter() // Current count: 2

// Both nested functions can access the same outer variable.
