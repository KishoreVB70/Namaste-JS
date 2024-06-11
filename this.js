"use strict";

function differentValueOfThis() {
    function norFunc() {
        // This inside a function is actually undefined
        // in non strict mode, it is substituted with the global object
        // When strict mode is used, this inside function is undefined
        // Strict -> undefined
        // non strict -> global object
        console.log(this);
    }
    
    // Undefined in strict mode
    norFunc();
    
    // the reference object(this) will be the this value inside of the function now
    this.norFunc();
    
    const botFunc = () => {
        console.log(this);
    }
    
    // For an arrow function, even if in strict mode, it is the lexical parent's this,
    // Global object in this context
    botFunc();
}


// this inside an object
let user = {
    name: "John doe",
    age: 42,
    sex: "male",
    printAge: function() {
        // this points to the object itself
        console.log(`Age of ${this.name} is ${this.age}`);

        // Arrow function take up this of their lexical parent
        const func = () => {
            console.log("Name from inner arrow function: ", this.name);
        }
        func();
    },
    methBot: () => {
        // this points to the global object for arrow function
        function bot() {
            // The this variable here is going to be undefined
            // It is because, in strict mode, functions are always undefined

            // If not in strict mode, then it is going to be the global object
            // Not the outer object

            // Because this is a normal function and not a method
            console.log("This from the inner function: ", this);
        }
        bot();
        console.log("this is: ", this);
    },
};

let user2 = {
    name: "Preethiga",
    age: 24
};

user.printAge();
user.methBot();

// This cannot be done for arrow functions
user.printAge.call(user2);

/*
##### This Keyword
- `this` behaves differently in different circumstances and in different runtimes
1. `this` points to the `global` object in the global space
	- `global` in browser is the `window`
2. `this` in a function is **undefined** in **strict** mode
	- In **non strict** mode, `this` **substitution** occurs
		- this substitution will substitute global object if the `this` keyword is undefined or null
	- The value of `this` will be the global object 
	- The above is the case if function is called without any reference `func()`
	- But, if it is called `globalObj.func()`, then it would be the called object, which is the global object 
3. For **Arrow function** `this` will always be the **outer lexical context**
	- For arrow function, they don't have their own `this` so the value of `this` is that of their lexical parent
	- Either be the `global` or that of an **object**
4. `this` in object methods points to the **object itself**
	- Unlike normal functions, methods points to the **object itself**
5. Call,  apply, bind methods
	- `call`
		- Used to share method from one function into method of another function
			- It is used to reduce reusage of same code -> reduce repetition
		- Using `call` we can pass the `this` into a method of an object so that it can use the function using the provided `this` context
		- `user1.printName().call(user2)`
		- Using the `printName` function of user1 to print the name of user2 by passing the `this` keyword in `call`
		- Instead we can make a custom function in the global space itself instead of keeping the function in an object
		- `printName().call(user3)`
		- If there are any arguments to be passed to that function, the first variable in `call` will always be the `this` reference followed by other parameters
	- `apply`
		- For the parameters, instead of passing them individually, we pass them in a list of parameters
		- `printName().apply(user1, [param1, param2])`
	- `bind`
		- It returns a function which binds the input function with the provided `this` context
		- `const funky = printName().bind(user3)`
		- `funky()`
6. `this` in DOM
	- - `this` in **DOM** or **HTML**
	- it will point to that **HTML element object** itself
	- `<button onclick='alert(this)'>click</button>`
	- This will point to the button element object
7. `this` inside of classes and constructors => **Object Oriented Programming** -> works differently
*/