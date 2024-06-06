// The global object will be created even if there is no code
console.log(window);

// In global space, this points to the global object(window in the case of browser)
console.log(this);

var a = 22;

// All these refer to the variable a part of the window object
console.log(window.a);
console.log(a);
console.log(this.a);

/*
### Shortest Javascript Program
- The shortest Js program is the **empty file**
- Even if there is no code to be executed, the javascript engine will first create a global execution context, then look at the code
- Window object is created and is part of the global execution context
- Global Object -> Window or something
	- The global object is `window` in **browsers**
	- It differs for servers
    - The javascript engine creates the global object
    - It contains a shit load of functions and methods in the global scope
    - The engine also creates `this` variable. In **global** level, `this` points to the **global object**
    - All the functions and the variables declared in the outer scope of the code is **attached** to the **window object**
    - If a variable or function is **not inside** of a **function**, then it is inside of the **global object**
*/