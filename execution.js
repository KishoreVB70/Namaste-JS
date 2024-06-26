var i = 30;

// Function definition
function cubeIt(num) {
    return (num * num * num);
}

// Function invocation
var ans = cubeIt(i);

/*
- Steps in execution of JS code
	- **JS engine** does all the work
    - First, a global **execution context**  is created
    - There are 2 phases
	1. Memory creation phase - allocates memory for all the functions and variables -> The value of all variables will be **undefined** and the function **stores** whole **code** of the function
	2. Code execution phase - executes code line by line to assign values to variables and perform the logic. Function **invocation** is the call to a function -> execution of the function
    - If a function is invoked, a **separate execution context** for the function is created
	    - Then the creation and execution phase is performed for the local environment
    - The parameter of the function is the first to be assigned in the execution phase
    - Once **return** is hit, the engine returns the execution to the outer environment (either the global environment or the outer function) and **deletes the local environment**. It create another execution context, if the function invoked later down the line
    - Once after the last line of the code is executed, the **global execution** context is also **deleted**
    - Support image
	    - ![[Pasted image 20240605121137.png]]
- Call Stack
    - Call stack helps the engine to **track** and **manage** the **execution environments(context)**
    - In the stack the bottom will be the global execution environment
    - Whenever a function is invoked and a new execution context is created, it gets stacked on top
    - After the function returns, the local execution context is popped from the stack
    - Once the whole code execution is completed, the global environment itself is popped out of the stack
    - The program is done after all this

### Hoisting
- In JS, we can call a function in the code before it's declaration in the code. And we can access a variable even before it is initialized in the code (It would return **undefined**). It is because, during the creation phase the entire code of the function is stored and during the execution phase, it is able to run it
> Hoisting is the phenomenon of accessing variables and functions in JS before they are initialized in the code
- JS hoisting is the **side effect of the phases** of execution context -> due to the creation phase, all variables are available before their initialization
- If in the execution phase, we access them before initializing, it will return the values in memory
- Undefined for variables and the actual function code for the function
- This way functions can be invoked in the code before initializing
- If a function is written as an arrow function, then it behaves like a variable and will be undefined
*/