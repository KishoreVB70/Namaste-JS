function cartExample() {
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
    
            if(obj.cost < 50) {
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
    
    const myAsyncfunc = async() => {
        console.log("I'm an async function");
    
        try {
            const result = await createOrder(cart);
            console.log(`Your Order id: ${result.orderId} and cost is: ${result.cost}`);
        
            const result1 = await makePayment(result);
            console.log("cost is", result1.cost);
        
            const result2 = await updateDetails(result1);
            console.log("Number of days: ", result2.days);
        } catch(error) {
            console.log("Error: ", error.message);
        }
    
        // The code inside only this function will wait till the promise is resolved
        // This log will not be printed till the promise is resolved
        console.log("Function end");
    
    }
    
    myfunc();
    console.log("End");
}


function fulfilCart() {
    console.log("Hi from fulfil cart");
    return promise1 = new Promise((res, rej) => {
        setTimeout(() => {
            res("cart fulfilled");
        }, 2000);
    })
}

function makePayment() {
    console.log("Hi from make payment");
    return promise2 = new Promise((res, rej) => {
        setTimeout(() => {
            res("payment done");
        }, 3000);
    })
}

console.log("False end");

const myAsyncfunc1 = async() => {
    const value = await fulfilCart();
    console.log("Value from the async function: ", value);
}

const myAsyncfunc2 = async() => {
    const value = await makePayment();
    console.log("Value from the async function: ", value);
}


myAsyncfunc1();
myAsyncfunc2();

fulfilCart().then((res) => console.log("From then: ", res));
makePayment().then((res) => console.log("From then: ", res));


setTimeout(() => {
    console.log("Timeout");
}, 1000)

console.log("Correct end");
