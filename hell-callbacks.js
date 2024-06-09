console.log("Start");

// Example of a normal callback function
setTimeout(() => {
    console.log("After 5 secs")
}, 5000);

console.log("end");

let api;


// Hypothetical example of callback hell
// Issue 1 is the horizontal growth of the code
// Issue 2 is the inversion of control to the external agent
const cart = ["LBP shampoo", "Legion 7i", "XM5"]
api.createOrder(cart, (cost) => {
    api.proceedPayment(cost, () => {
        api.updateUI(cart, () => {
            api.StartShipping(cart, cost);
        })
    }) 
})