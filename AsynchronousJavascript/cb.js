const fs = require("fs");

console.log("First line");

// let data1 = fs.readFileSync("f1.txt", "utf8");
// console.log("File 1 data:", data1);

// let data2 = fs.readFileSync("f2.txt", "utf8");
// console.log("File 2 data:", data2);

// Asynchoronously -> not single order
// fs.readFile("f1.txt","utf8", cb1);

// function cb1(err, data1) {
//     if(err) {
//         console.log(err);
//     }
//     console.log("File 1 data:", data1);
    
// }

// fs.readFile("f2.txt", "utf8", cb2);

// function cb2(err, data2) {
//     if(err) {
//         console.log(err);
//     }
//     console.log("File 2 data:", data2);
// }

// fs.readFile("f3.txt", "utf8", cb3);

// function cb3(err, data3) {
//     if(err) {
//         console.log(err);
//     }
//     console.log("File 3 data:", data3);
// }

// Async -> Serial order

fs.readFile("f1.txt","utf8", cb1);

function cb1(err, data1) {
    if(err) {
        console.log(err);
    }
    console.log("File 1 data:", data1);
    fs.readFile("f2.txt", "utf8", cb2);
}


function cb2(err, data2) {
    if(err) {
        console.log(err);
    }
    console.log("File 2 data:", data2);
    fs.readFile("f3.txt", "utf8", cb3);
}


function cb3(err, data3) {
    if(err) {
        console.log(err);
    }
    console.log("File 3 data:", data3);
}

console.log("Last line");
