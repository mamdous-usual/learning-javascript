// loops are the statement that we can use to control to control a flow of the program and do some repeatative task
var a = "Hello, World!";

// For loop
for(var i = 0; i<10; i++) {
    console.log(a);
}

// You have an array and you have to square each element of that array
var num = [2,3,4,5,6,7,8];

var squaredArr = []; // empty array

for (let i = 0; i<num.length; i++) {
    squaredArr.push(num[i] * num[i]);
}

console.log(squaredArr);