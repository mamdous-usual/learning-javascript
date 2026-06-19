// 90 - 100 -> A
// 70 - 89 -> B
// 50 - 69 -> C
// Lower than 50 -> F

var marks = 92;

if (marks >= 90) {
    console.log("A"); 
}
else if (marks >= 70 && marks <= 89 )  {
    console.log("B");
}
else if (marks >= 50 && marks <= 69) {
    console.log("C");
}
else {
    console.log("D");
}
