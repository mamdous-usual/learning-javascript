// Q. You have to check for even numbers in an array and put them in a seperate array

let numbers = [1, 2, 20, 35, 12, 17, 46];

let evenArray = [];

for(let i=0; i<numbers.length; i++) {
    if(numbers[i] % 2 == 0) {
        evenArray.push(numbers[i]);
    }
}

// console.log(evenArray);

// filter()

// filter returns a new array it will return all those elements that matches the specific condition
// if the condition is true it will return the element for that condition and if it is false it will discard that element

let num = [1, 2, 20, 35, 12, 17, 46];

let evenNum = num.filter(function(n) {
    return n % 2 == 0;
});

// console.log(evenNum);

// Q. Check postive values using filter()
const transactions = [1000, 3000, 4000, 2000, -898, 3800, -4500];

let dipositedAmount = transactions.filter(function(n) {
    return n > 0;
});

console.log(dipositedAmount);


