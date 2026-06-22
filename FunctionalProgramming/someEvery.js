// some() 
// some: Condition check: To get true or false based on a condition
// It will return true if even one 


const transactions = [-1000, -3000, -4000, 2000, -898, -3800, -4500];

let resultSome = transactions.some(function(n) {
    return n > 0;
});

console.log(resultSome);

// every() -> every element should satisfy the condition then return true

let resultEvery = transactions.every((n) => {
    return n > 0;
}); // I used arrow function

console.log(resultEvery);








