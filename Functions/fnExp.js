// What is an Expression

// var a = 2+3; // 2+3 is expression
// console.log(a);


var add = function(a,b) { // Also known as anonomous function cause it doesn't have any name
    return a + b;
}

var result = add(3,4);

var sum = add;
var res = sum(3,4);

console.log(result);
console.log(res);
