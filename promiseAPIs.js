const pushCart = (obj) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            if (obj.items > 5) {
                const error = new Error("Many objects");
                rej(error);
            }
            res("Pushed to cart");
        }, 1000)
    })
}

const makePayment = (obj) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            if (obj.cost > 500) {
                const error = new Error("Too much cost");
                rej(error);
            }
            res("Payment made");
        }, 100)
    })
}

const update = (obj) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            if (obj.cost < 50) {
                const error = new Error("Too little cost");
                rej(error);
            }
            res("Updated stuff");
        }, 10000)
    })
}

const items = [1,2,3,4,5,6];
const obj = {
    "cost": 555,
    "items": 5
}
console.log("start");

function all() {
    // If one promise fails itself, it will immediately print the error message
    // Even though it does that, it still waits for all the other promises to resolve
    // To end the code
    // Atleast that is true in node js
    const result = Promise.all([pushCart(obj), makePayment(obj), update(obj)]);
    
    result.then((res) => console.log("from then: ", res))
    .catch(error => console.log("Error then: ", error.message));
    
    async function asynfunc() {
        // Even if one promise fails, then the catch block would run
        try {
            const result = await Promise.all([pushCart(obj), makePayment(obj), update(obj)]);
            console.log("from async: ", result);
        } catch (error) {
            console.log("Error async: ", error.message);
        }
    }
    asynfunc();        
}

function settle() {
    const result = Promise.allSettled([pushCart(obj), makePayment(obj), update(obj)]);

    result.then((res) => handleResult(res));
    
    async function asynfunc() {
        // Try catch block is not required for Promise.allSettled as it is going to resolve no matter what
        const result = await Promise.allSettled([pushCart(obj), makePayment(obj), update(obj)]);
        handleResult(result);
    }
    asynfunc();

    function handleResult(result) {
        console.log(
            "Fulfilled promises: ",
            result.filter(i => i.status == "fulfilled").map(i => i.value)
        );
        console.log(
            "Rejected message: ", 
            result.filter(i => i.status == "rejected").map(i => i.reason.message));
    }
}

function race() {
    // When one promise is resolved or rejected, it immediately calls the then or catch
    // Even though it does that, it still waits for all the other promises to resolve
    // To end the code
    // Atleast that is true in node js
    const result = Promise.race([pushCart(obj), makePayment(obj), update(obj)]);
    result.then(res => console.log("ans: ", res))
        .catch(err => console.log("err", err.message));
}

all();


console.log("End");
