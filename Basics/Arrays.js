// Array provides you with an ordered collection of data
var arr = [12, "Ferrari", true, 12.4];
console.log(arr)

// Accessing elements
var a = arr[1];
console.log(a);
console.log(arr[2]);

// Replacing elements by using an index
arr[1] = "Alto";
console.log(arr[1]);

// Length of array
console.log("The length of the array is", arr.length);

// Inbuilt js array methods
var arr2 = [14, 16, 57, 59];

// pop method -> pops the last array element
var c = arr2.pop();
console.log(c);
console.log(arr2);

// push method -> add element at the end
arr2.push(15);
console.log(arr2);

// shift method -> remove an element from the starting of an array
var d = arr2.shift();
console.log(d)
console.log(arr2)

// unshift method -> add an element at the beginning 
arr2.unshift(10);
console.log(arr2)