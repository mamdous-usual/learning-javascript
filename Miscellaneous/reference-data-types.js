// Reference data types store a reference to the value in memory.

const student = {
  name: 'Aman',
  age: 21,
}

const numbers = [1, 2, 3]
const greet = function () {
  console.log('Hello')
}

console.log(student)
console.log(numbers)
greet()

// When you assign an object or array, you copy the reference, not the full value.
const anotherStudent = student
anotherStudent.age = 22
console.log(student.age) // 22
