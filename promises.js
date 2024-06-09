// Rewriting the hypothetical callback hell into promises
// Promises solves the inversion of control issue,
// but doesn't solve the pyramid of doom issue
// There is still chaining of then

const promise1 = api.createOrder(cart);

promise1.then((cost) => {
    promise2 = api.proceedPayment(cost);

    promise2.then(() => {
        promise3 = api.updateUI(cart);

        promise3.then(() => {
            api.StartShipping(cart, cost);
        })

    })
})
