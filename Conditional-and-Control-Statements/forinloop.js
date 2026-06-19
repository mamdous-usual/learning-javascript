// In javascript the for-in loop allows you to loop through the properties of an object.
// The statements of code found within the loop body will executed once for each propert of the object

var colors = {
    primary : "Blue",
    secondary : "Red", 
    tertiary : "White"
};

// Syntax

for (var color in colors) {
    console.log(color + " -> " + colors[color]); // must use bracket notation for for-in loop
}

// for arrays
var colorsArr = ["Power Blue", "Cherry Red", "White", "Pink"];

for (var color in colorsArr) { // Cause in javascript array is also an object
    console.log(color + " -> " + colorsArr[color]); 
}