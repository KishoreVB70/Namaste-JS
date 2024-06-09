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

/*
##### Callback hell
- To  understand promises, deeper understanding of callbacks is required
- Call backs enable the **Async operations** in the single threaded language
- If the execution of one function is dependent on another function, then the dependent function can be passes as callback to the former function
- Image of callbacks after callbacks for API calls
	- ![[Pasted image 20240609080843.png]]
- The chaining of callbacks inside callbacks inside callbacks like the prior image is the callback hell
- This kind of horizontal code is called the **pyramid of doom**
2 Issues of callbacks
1. Callback hell -> Code grows horizontally due to the **chaining** of callbacks and becomes **unreadable**
2. Inversion of control -> providing the control of our code to external agents (API) or other code which we don't have control over
	- Loose control of code during callbacks
	- In even our case of the prior image, we gave the responsibility of calling our function to the **external agent** of the **API**
	- We put in great **trust** on the code of the external agent
	- Some issues -> function is not called, function is called twice
*/