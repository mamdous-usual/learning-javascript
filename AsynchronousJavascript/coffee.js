function placeOrder(drink) {
    return new Promise(function(resolve, reject){
        if(drink === "coffee") {
            resolve("Order placed for coffee.");    
        } else {
            reject("Other orders rejected");
        }
    });
}


function processOrder(order) {
    return new Promise(function(resolve, reject){
        console.log("Order is being processed");
        resolve(`${order} is serverd`);
    });
}

// placeOrder("coffee").then(function(orderPlaced){
//     console.log(orderPlaced);
//     let orderIsProcessed = processOrder(orderPlaced);
//     return orderIsProcessed;
// }).then(function(processedOrder){
//         console.log(processedOrder);
// }).catch(function(err){
//     console.log(err);
// });// Chaining of promises


// Async Await keyword 

async function serverOrder() {
    try {
        let orderPlaced = await placeOrder("coffee");
        console.log(orderPlaced);
        let orderIsProcessed = await processOrder(orderPlaced);
        console.log(orderIsProcessed);
    } catch(err) {
        console.log(err);
    }
} 

serverOrder();

