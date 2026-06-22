// We will be given a number and we have to check if the square of that number is even or not


// Imperative way of writing code
const num = 5;

const square = num * num;
let isEven;

if (square % 2 == 0) {
    isEven = true; 
}
else {
    isEven = false;
}

console.log(isEven);


// Declarative  way of writing code
const checkForSquare = (x) => (x*x % 2 === 0 ? true : false);

console.log(checkForSquare(5));
