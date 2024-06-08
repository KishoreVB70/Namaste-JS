console.log("Start");

// Time outs are pushed on to the Task queue once after completion
setTimeout(() => {
    console.log("Time out");
}, 2000)

// DOM callbacks are also pushed on to the Task queue
// Anything other than promises and the mutation observers callbacks are pushed to the Microtask queue
const btn = document.getElementById("click-btn");
btn.addEventListener("click", () => {
    console.log("Clicked");
})

// All type of promises are pushed on to the Micro task queue after completion
// Calbacks in the microtask queue have higher priority than the Task queue 
fetch("https://api.netflix.com")
.then(() => {
    console.log("Fetch")
})

console.log("end");

/*
### The Event Loop
- Call stack
    - A stack inside the javascript engine which executes the code
	    - It is actually the **main thread** of the engine which executes the code
    - The stack executes whatever that comes inside it
    - Call stack does not have a **timer**, u give it a code, it executes it - That simple!!
    - So inherently asynchronous tasks have to be set aside somewhere with a clock and pushed to the stack at the right time
    - The JS engine inherently has only the call stack and needs external resources for other functions
- The Browser
    - The browser has the JS Engine used to run the JavaScript Code
    - It has a local storage to store some data
    - It has timer
    - It has url input
    - The browser can make connection with external servers and get data
    - It can display the data through it’s UI
    - It also has access to a ton of things like location etc...
    - The JS engine needs a way to access all other resources available in the browser such as the timer -> **API's**
- All these stuff are **outside of the JS engine**, only the call stack which is discussed till now is inside of the JS engine
- Web Api’s
    - For  accessing external things in the browser, the JS engine needs the help of the web API’s
    - Browser gives access to everything through API’s
    - We get access to all these API's through the **global object** (the window in case of the browser)
    - All these API's are present in the **window object**
    - Most common web API's
		1. set timeout -> Access the browser timer
	    1. fetch
	    2. console
	    3. DOM stuff
	- Global Object
	    - The global object is the window in case of the browser
	    - Browser gives all the access to the engine through window
	    - And stuffs inside the window object are the web AIP’s
	    - As window is the global object we need not write window.set timeout
- The callback Queue and Event Loop
    - As a set time out or a event listener is set, it is placed in the **web API's environment**
    - Callback queue is called as the **Task queue**
    - Once after the timer expires for a set timeout, the call back function is pushed to the callback Queue
    - The Event Loop the  pushes the callback it into the Call Stack
    - Event Loop Continuously **monitors** the call back queue and the Call Stack 
    - The Event loop would push the function from the callback queue into the callstack only if it is empty and finished execution of the ongoing function
	- Why we need a callback Queue
	    - If in the case of a event listener, if the user clicks the button several times, then we need to execute them one after the other in a queue fashion
	    - Only if the callstack is empty, the Event loop will supply the callback to the stack
- Fetch() -> Promise
    - Fetch method goes and requests a API call and returns a **promise**
	    - The promise would resolve into something in the future
	    - Once the promise is resolved in the future, then a call back function will be called
    - We need to attach a callback function to the promise which will run after the promise is resolved
    - Fetch function makes a network call with the server and waits for the data
    - Once the data is returned, the Callback function is ready to be executed
    - The call backs resolved from promises are pushed into the **Micro Task Queue** rather than the callback queue
- Micro Task Queue
    - Similar to callback queue but has **higher priority**
    - Anything in the microTask Queue is executed first before the callback queue by the eventLoop
    - All functions that come through **promises** are queued in the micro task queue
    - Also **mutation observer** -> (Mutation in the DOM tree) are pushed to the this queue
- Starvation - There are a ton of callbacks in the Micro task Queue such that the functions in the callback queue never see the light of the day (So sad for the callbacks)
*/