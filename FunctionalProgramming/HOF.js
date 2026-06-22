let arr = [1, 2, 3, 4, 5];
let squarredArray = [];

for (let i=0; i< arr.length; i++) {
    squarredArray.push(arr[i] * arr[i]);
}

// console.log(squarredArray);


// map()
// Map will loop through every element of your array and will perform specific operations that you have provided
// Map method will always return you a new array with your results

const num = [1, 2, 3, 4, 5];

const squarredNum = num.map(function(n) {
    return n*n;
});

// console.log(squarredNum);


// Q. convert rupee to dollar using map function
const transactions = [1000, 3000, 4000, 2000, -898, 3800, -4500];

const intoDollar = 95;

let result = transactions.map((n) => {
    return (n / intoDollar).toFixed(0);
});

console.log(result);

// forEach() -> forEach doesn't return anything but everything else to same to 


let res = transactions.forEach((n) => {
    console.log((n / intoDollar).toFixed(0));
});

console.log(res);


