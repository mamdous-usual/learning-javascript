// How to produce a promise

let myPromise = new Promise(function(resolve, reject){
    const a = 4;
    const b = 5;

    setTimeout(() => {
        if(a === b){
            resolve("The values are equal");
        } else {
            reject("The values are not equal");   
        }
    }, 2000)
});

// Pending state
// console.log(myPromise);


// function to handle the promise -> then method

myPromise.then(function(result){
    console.log(result);
}); // fullfilled state

myPromise.catch(function(failedResult){
    console.log(failedResult);
}); // rejected state

