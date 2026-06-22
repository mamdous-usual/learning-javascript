function firsName(firstName, cb) {
    console.log(firstName);
    cb(`Laskar`);
}


function lastName(lastName) {
    console.log(lastName);
}


// firsName(`Mamdous`,lastName);// callback


// Callback function -> Check for even

const isEven = (n) => {
    return n % 2 == 0;
}


let printResult = (evenFn, num) =>  {
    const isNumEven = evenFn(num);

    console.log(`The number ${num} is an Even Number: ${isNumEven}`);
}

printResult(isEven, 5);



