// Q. You need the sum of every element in an array

// Imperaive way

let nums = [1,2,3,4,5,10,14];

let sum = 0;// accumulator

for(let i=0; i<nums.length; i++) {
    sum += nums[i];
}

// console.log(sum);


// reduce() -> always returs a single value

let resultSum = nums.reduce(function(acc, value) {
   let updatedSum = acc+value;
   return updatedSum;
}, 0);


let resultProduct = nums.reduce(function(acc, value) {
   let upadtedProduct = acc*value;
   return upadtedProduct;
}, 1);

console.log(resultSum);
console.log(resultProduct);
