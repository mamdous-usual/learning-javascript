// Similar to function experession
let test1 = () => {
    console.log(1);
}

let test2 = a => console.log(a + 2); // can remove {} if it's a single line


let test3 = (a, b) => {
    console.log(a + b);
}


test1();

test2(5);


test3(5,7);
