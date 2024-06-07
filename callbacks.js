// Aync JS established through call backs
function y(msg){
    console.log(`I'm the call back function called from ${msg}`);
}


// Why this works perfectly
setTimeout(() => {
    y("time out");
}, 1000);

// While this doesn't work
// It is called instantly

// This is because the setTimeout function expects a call back, but y doesn't return a callback???
setTimeout(y("Time bot"), 1000);


// It would print undefined as the input is not given
// If I try to give input, then it is executed immediately
setTimeout(returner(y), 1000);

function x(y) {
    console.log(
        "This is the outer function"
    );
    y("Normal")
}

// This function returns the function y
function returner(y) {
    return y;
}

x(y)

// Event listeners Lore
let btp = document;
console.log(btp);
const btn = document.getElementById("bts");


// Count the number of times the button is clicked
let counter = 0;
btn.addEventListener("click", () => {
    console.log("clicked", ++counter);
})

// Creating closure to protect the count
// Now nothing other than the even listener can modify the counter variable
function eventProtector() {
    let counter = 0;
    btn.addEventListener("click", () => {
        let botesan = 0
        botesan++;
        console.log(botesan);
        console.log("clicked", ++counter);
    })
}
eventProtector();

/*
### Callbacks - Event listeners Pre Event Loop
- Function Call back - Call back Function
    - A **function which is passed inside another function** - Call back function
    - The functions passed in is the call back function
    - As the functions is passed inside another function, it is in the power of the outer function to call the callBack function
    - The function y is called back somewhere later in the code - CallBack function
    - Callbacks power the **Asynchronous** world in the synchronous JavaScript
    - JS waits for the timeout to finish and in the mean time, if it finishes the entire code, it would pop everything out of the call stack
    - Once the time out is over, then it would pop onto the call stack
    - Code
	    ```jsx
	    function a(){
	    
	    }
	    a(function b(){
	    	console.log("I'm a call back function")
	    })
	    ```
- Blocking the main thread
    - All functions are executed in the call stack
	- **Call stack** is actually the **main thread** of the language which is responsible for the execution of code
    - If any operation block the calls stack, then it is blocking the main thread and nothing can execute
- Event Listeners
    - Event listeners are attached to the DOM elements and take in a callback function, if the event is triggered, the callback function is called
    - Event Listeners are **heavy** -> takes up memory(for closure and stuff) Due to the closure not allowing the variables to be garbage collected
    - If an event listener callback consist of  a closure, then even if the js code finishes executing, the **memory allocated** to the closure, the lexical and the global environment is not freedup and it slows down the client
    - If there are several event listeners in a page, then it can make the page slow
    - If we **remove the event listeners**, then the variables would be garbage collected and free up memory
    - `Script` tag in the html file must be placed at the end of the body tag for the JS to work after the DOM is loaded, or else, the JS will run before rendering the DOM
- Similarly, the callbacks other than the event listeners also take up memory and needs some consideration when working with them
*/