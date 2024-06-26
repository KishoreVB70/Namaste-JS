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
        }, 1000)
    })
}

const update = (obj) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            if (obj.cost < 5000) {
                const error = new Error("Too little cost");
                rej(error);
            }
            res("Updated stuff");
        }, 3000)
    })
}

const items = [1,2,3,4,5,6];
const obj = {
    "cost": 555,
    "items": 6
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

function fany() {
    // If all promises are rejected
    // The error is an array of all the errors
    // the error message is - all promises are rejected
    const result = Promise.any([pushCart(obj), makePayment(obj), update(obj)]);
    result.then(res => console.log("ans: ", res))
        .catch(err => console.log("err: ", err));
    async function asynfunc() {
        try {
            const result = await Promise.any([pushCart(obj), makePayment(obj), update(obj)]);
            console.log("ans: ", result);
        } catch (err) {
            console.log("err: ", err.message);  
        }
    }
    asynfunc();
}

fany();


console.log("End");


/*
##### Promise API's
- 4 API's
1. `Promise.all`
	- Used for parallel API calls
		- Eg -> get 10 user id parallelly
	- Handle multiple promises together
		- Takes in array of promise
	- `promise.all([p1,p2,p3])`
	- The final result will be available only when all the 3 promises are resolved
	- So, the time of `promise.all` depends on the longest API call in the array
	- Output is the array of all the resolved values
	- Failure case
		- If once promise, get rejected, then **immediately** `promise.all` would return the error and will suspend the other promises
2. `Promise.allSetteled`
	- Similar to `Promise.all`
	- But instead of returning total failure for failing for a single promise,
	- Even if one promise is rejected, it will run the other promises and return the result of each promise
	- Output -> `[output1, error, output3, output4, error`
	- The output would be an array of objects
	- Each objects would contain 2 values
		1. status -> fulfilled or rejected
		2. value -> resolved value
		3. reason -> error returned by reject
3. `Promise.race`
	- Which ever promise gets resolved or rejected first,
		- It will call `.then` or `.catch` respectively
	- Which ever promise gets fulfilled or rejected will be the return value and will be executed **immediately**
4. `Promise.any`
	- Wait for the success of any of the promise
	- It will ignore the failure of the promises
	- It will return the first promise which is fulfilled
	- Only when all the promises are failure, then it would return the failure
	- The error would be an aggregate error -> An array containing all the errors
	- If all promises are rejected, the **error message** is - all promises are rejected
*/