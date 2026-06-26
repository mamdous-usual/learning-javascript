// A closure happens when a function remembers variables from its outer scope.

function outer() {
  const message = 'Hello from outer scope'

  function inner() {
    console.log(message)
  }

  return inner
}

const fn = outer()
fn() // Hello from outer scope

// The inner function still has access to message even after outer() finishes.
