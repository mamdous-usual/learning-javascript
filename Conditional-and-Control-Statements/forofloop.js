// The for of statement creates a loop iterating over iterable objects.
// Including : built-in String, Array, array-like objects like NodeList and also map and set

/*
for-in -> for objects
for-of -> for iterables
*/


var scores = [60, 90, 80, 75];

// Syntax

for(score of scores) { // same as for-each loop in java & cpp
    score = score+5;
    console.log(score);
}

// method -> entries() --> for getting indexes

let colors = ["Red", "White", "Green"];

for (var [index, color]  of colors.entries()) {
    console.log(index + " -> " + color);
}


// Strings

var str = "Mamdous";

for (var ch of str) {
    console.log(ch);
}