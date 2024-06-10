const pushCart = (obj) => {
    return new Promise((res, rej) => {
        if (obj.items > 5) {
            const error = new Error("Many objects");
            rej(error);
        }
        res("Pushed to cart");

    })
}

const makePayment = (obj) => {
    return new Promise((res, rej) => {
        if (obj.cost > 500) {
            const error = new Error("Too much cost");
            rej(error);
        }
        res("Payment made");
    })
}

const update = (obj) => {
    return new Promise((res, rej) => {
        if (obj.cost < 50) {
            const error = new Error("Too little cost");
            rej(error);
        }
        res("Updated stuff");
    })
}

const items = [1,2,3,4,5,6];
const obj = {
    "cost": 5,
    "items": 6
}
console.log("start");

function all() {
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
    
    result.then((res) => console.log("from then: ", res))
    .catch(error => console.log(error.message));
    
    async function asynfunc() {
        // Try catch block is not required for Promise.allSettled as it is going to resolve no matter what
        const result = await Promise.allSettled([pushCart(obj), makePayment(obj), update(obj)]);
        console.log("from async: ", result);
    }
    asynfunc();
}
all();

console.log("End");
