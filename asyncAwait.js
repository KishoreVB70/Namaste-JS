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

function confusionExample() {
    function fulfilCart() {
        return promise1 = new Promise((res, rej) => {
            setTimeout(() => {
                res("cart fulfilled");
            }, 2000);
        })
    }
    
    function makePayment() {
        return promise2 = new Promise((res, rej) => {
            setTimeout(() => {
                res("payment done");
            }, 1000);
        })
    }
    
    console.log("False end");
    
    const myAsyncfunc1 = async() => {
        const value = await fulfilCart();
        console.log("from Async function: ", value);
    }
    
    const myAsyncfunc2 = async() => {
        const value = await makePayment();
        console.log("from async function: ", value);
    }
    
    myAsyncfunc1();
    myAsyncfunc2();
    
    fulfilCart().then((res) => console.log("From then: ", res));
    makePayment().then((res) => console.log("From then: ", res));
    
    
    setTimeout(() => {
        console.log("Timeout");
    }, 1000)
    
    console.log("Correct end");

}

function importantExample() {
    const promise1 = new Promise((res, rej) => {
        setTimeout(() => {
            res("cart fulfilled");
        }, 1000);
    })
    
    
    const promise2 = new Promise((res, rej) => {
        setTimeout(() => {
            res("payment done");
        }, 0.1);
    })
    
    
    const myAsyncfunc1 = async() => {
        const value = await promise1;
        console.log("from Async function: ", value);
    
        async function bot() {
            const value2 = await promise2;
            console.log("Value2: ", value2);
        }
        bot();
    
        //Kutty end is printed even though the promise has already been resolved
        // This is because after the await, the execution is popped off even though
        // It is already been resolved
        console.log("Kutty end");
    }
    
    console.log("end");
    
    myAsyncfunc1();
}

async function fetchExample() {
    const API = "https://api.github.com/users/kishorevb70";
    const fetcher = async() => {
        // Fetch returns a promise
        const showDown =  await fetch(API);
        // data.json is actualy an external API function, it also returns a promise
        // We await till the value is resolved
        console.log(await showDown.json());

        // Proper way to do is
        const jsonValue = await showDown.json();
        console.log(jsonValue);


    }
    fetcher();
    console.log("Waiting to fetch the user");
}

fetchExample();



