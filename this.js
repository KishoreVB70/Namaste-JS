"use strict";
function norFunc() {
    // This inside a function is actually undefined
    // in non strict mode, it is substituted with the global object
    // When strict mode is used, this inside function is undefined
    // Strict -> undefined
    // non strict -> global object
    console.log(this);
}

// Undefined in strict mode
// norFunc();

// the reference object(this) will be the this value inside of the function now
// this.norFunc();

const botFunc = () => {
    console.log(this);
}

// For an arrow function, even if in strict mode, it is the global object
botFunc();

// this inside an object

let user = {
    name: "John doe",
    age: 42,
    sex: "male",
    meth: function() {
        // this points to the object itself
        console.log("age is: ", this.age);
    },
    methBot: () => {
        // this points to the global object for arrow function
        console.log("this is: ", this);
    }
}

user.meth();