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
