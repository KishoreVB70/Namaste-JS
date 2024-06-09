// Rewriting the hypothetical callback hell into promises
// Promises solves the inversion of control issue,
// but doesn't solve the pyramid of doom issue
// There is still chaining of then

const promise1 = api.createOrder(cart);

// Variable based promise chaining -> horizontal 🤢
promise1.then((cost) => {
    promise2 = api.proceedPayment(cost);

    promise2.then(() => {
        promise3 = api.updateUI(cart);

        promise3.then(() => {
            api.StartShipping(cart, cost);
        })

    })
})

// Directly tying then without the need for a variable
// Chaining without variable is the best form of promise chaining
// This solves the horizontal chaining issue as it is now vertical chaining interms of readability

// When not using variable, return is must to included to return the promise to the next chain
api.createOrder(cart)
    .then((cost) => {
        return api.proceedPayment(cost);
    })
    .then((cost) => {
        return api.updateUI(cart, cost);
    })
    .then((cost) => {
        return api.StartShipping(cart, cost);
    })

// Kinda shortening it as for a single parameter, brackets is not requried
api.createOrder(cart)
    .then(cost => {
        return api.proceedPayment(cost);
    })
    .then(cost => {
        return api.updateUI(cart, cost);
    })
    .then(cost => {
        return api.StartShipping(cart, cost);
    })


// Shortening it
// This has automatic return
api.createOrder(cart)
    .then((cost) => api.proceedPayment(cost))
    .then ((cost) => updateUI(cart))
    .then((cost) => StartShipping(cart, cost));

// can be even more shortened by removing the input brackets of arrow functions
api.createOrder(cart)
    .then(cost => api.proceedPayment(cost))
    .then(cost => api.updateUI(cart))
    .then(cost => StartShipping(cart, cost));


// Real world example

const gitAPI = "https://api.github.com/users/kishorevb70"

// Fetch method returns a promise
const user = fetch(gitAPI);

// Promise { <pending> }
// Promise object contains pending 
console.log("Before resolving: ", user);

// Promise { <fulfilled>: Response }
// Promise object contains the appropriate information under the response object
user.then(() =>  console.log("After resolving: ", user) );