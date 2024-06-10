const pushCart = (obj) => {
    return Promise((res, rej) => {
        if (obj.items > 5) {
            const error = new Error("Many objects");
            rej(error);
        }
        res("Pushed to cart");

    })
}

const makePayment = (obj) => {
    return Promise((res, rej) => {
        if (obj.cost > 500) {
            const error = new Error("Too much cost");
            rej(error);
        }
        res("Payment made");
    })
}

const update = (obj) => {
    return Promise((res, rej) => {
        if (obj.cost < 50) {
            const error = new Error("Too little cost");
            rej(error);
        }
        res("Updated stuff");
    })
}

const items = [1,2,3,4,5,6];
const obj = {
    "cost": 50,
    "items": 6
}
console.log("start");

function all() {
    const result = Promise.all([p1,p2,p3]);
    
    result.then((res) => console.log("from then: ", res))
    .catch(error => console.log(error.message));
    
    async function asynfunc() {
        const result = await Promise.all([p1,p2,p3]);
        console.log("from async: ", result);
    }
    asynfunc();        
}

function settle() {
    const result = Promise.allSettled([pushCart(obj), makePayment(obj), update(obj)]);
    
    result.then((res) => console.log("from then: ", res))
    .catch(error => console.log(error.message));
    
    async function asynfunc() {
        const result = await Promise.allSettled([pushCart(obj), makePayment(obj), update(obj)]);
        console.log("from async: ", result);
    }
    asynfunc();
}
settle();

console.log("End");
