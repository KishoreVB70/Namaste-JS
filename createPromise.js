const isValid = cart => cart.length <= 5

const cart = ["XM5", "Legion7i", "LBP"];
const cart1 = ["XM5", "Legion7i", "LBP", "f", "p", "c"];

console.log("start");
function createOrder(cart) {
    return promise = new Promise((resolve, reject) => {
        // Reject
        if (!isValid(cart)) {
            // This type of error must be handled or else it will be a harsh error
            // in the console or the terminal

            // The error will be an uncaught error
            // Catch is needed to handle this
            const error = new Error("Error: cart has more than 5 elements");
            reject(error);
        }

        // Resovle
        // Whatever is attached to the resolve is made available to the callback function
        // through then method
        const orderId = 1;

        // Fake delay
        setTimeout(() => resolve({'orderId': orderId, "cost": 15}), 2000);
    });
}

function makePayment(obj) {
    return new Promise((resolve, reject) => {

        if(obj.cost > 500) {
            const error = new Error("Over priced");
            reject(error);
        }

        setTimeout(() => resolve({'orderId': obj.orderId, 'cost': obj.cost}), 2000);
    });
}

function updateDetails(obj) {
    return promise = new Promise((resolve, reject) => {

        if(obj.cost < 500) {
            const error = new Error("Uh Huh severly priced");
            reject(error);
        }

        setTimeout(() => resolve({
            'orderId': obj.orderId,
            'cost': obj.cost,
            'days': 1
        }), 2000);
    });
}

// For every then chain, whatever variable we need, we need to return it to the next level
createOrder(cart)
    .then(obj =>  {
        console.log(`Your Order id: ${obj.orderId} and cost is: ${obj.cost}`);
        // Returning the promise to the next level
        return makePayment(obj);
    })
    .then(obj => {
        console.log("cost is", obj.cost);
        return updateDetails(obj);
    })
    .then(obj => console.log("Number of days: ", obj.days))
    // Catch the error and do something with it
    .catch(error => console.log(error.message));

// The code in the mean time
console.log("This is the good times");

