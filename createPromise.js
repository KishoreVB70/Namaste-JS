const isValid = cart => cart.length <= 5

const cart = ["XM5", "Legion7i", "LBP"];
const cart1 = ["XM5", "Legion7i", "LBP", "f", "p", "c"];

function createOrder(cart) {
    const promise = new Promise((resolve, reject) => {

        // Reject
        if (!isValid(cart)) {
            // This type of error must be handled or else it will be a harsh error
            // in the console or the terminal

            // The error will be an uncaught error
            // Catch is needed to handle this
            const error = new Error("cart has more than 5 elements");
            reject(error);
        }

        // Resovle
        // Whatever is attached to the resolve is made available to the callback function
        // through then method
        const orderId = 1;

        // Fake delay
        setTimeout(() => resolve({'orderId': orderId}), 2000);
    });

    return promise;
}

const result = createOrder(cart1);
// What is returned through resolve is available as paramter of the callback function
result.then(obj => console.log(obj))
// Catch the error and do something with it
.catch(error => console.log(error));
