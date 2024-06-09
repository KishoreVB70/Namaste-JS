const cart = ["XM5", "Legion7i", "LBP"];
const isValid = cart => cart.length <= 5;

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

        if(obj.cost < 5) {
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

const myfunc = async() => {
    console.log("I'm an async function");

    const result = await createOrder(cart);
    console.log(`Your Order id: ${result.orderId} and cost is: ${result.cost}`);

    const result1 = await makePayment(result);
    console.log("cost is", result1.cost);

    const result2 = await updateDetails(result1);
    console.log("Number of days: ", result2.days);

    // The code inside only this function will wait till the promise is resolved
    // This log will not be printed till the promise is resolved
    console.log("Function end");

}

myfunc();
console.log("End");
