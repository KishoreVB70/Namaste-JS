console.log("Start");
function cb() {
    console.log("Called");
}

setTimeout(cb, 1000);
// Any function inside the settimeout will not be part of the global scope,
// It would be part fo the local scope
setTimeout(function puffy() {
    console.log(puffy);
}, 10);

console.log("End");

// If there are code which take more than a second, then the call back 
// can be executed only after all the code is finshed executing

// Simulation code which would run for 5 seconds
const startTime = new Date().getTime();
let endTime = new Date().getTime();

while (startTime + 5000 > endTime) {
    endTime = new Date().getTime();
}

console.log("While ends");

// Only after this the 1 second callback will be called

/*
### Set timeout
- JavaScript Waits for no one, if a timeout is set for a function, it will run others before it
- Timeout is **Async**
- Once the time of the timeout is over, then the callback function is called
- Closure and the different scope of variables determine the value of the set timeout
	- Refer the github for the detailed explanation of how set timeout behaves
- If a timeout is set for 5 seconds, the callback maybe implemented after  seconds or later based on 
	1. The call stack availability
	2. Callbacks in the microtask queue
	3. Other callbacks in the Task queue before the particular callback
- This callback structuring is called the **concurrency model of JS**
*/