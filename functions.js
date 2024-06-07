// Function code
console.log(statement);

// Undefined
console.log(expressionWithVar);

// reference error -> you can't access before intialization
// As it is in the temporal dead zone
console.log(expressionWithConst);

// Function statement or function declaration
function statement() {
    console.log(
        "This is a function statement"
    );
}

// Function expression
// The RHS is an anonymous function without a name
var expressionWithVar = function() {
    console.log("This is a function expression using var");l
}

const expressionWithConst = function() {
    console.log("This is a function expression using const");
}

/*  The difference between the function statement and function expression is the hoisting,
    the function statement is hoisted with the entire code, where as the express is a 
    variable and if it is a let or const, we can't access it before intialization and 
    if it is a var, it will be undefined before the intialization
*/


// Named function expression -> give a name to the function during a function expression
// This is weird as the name is useless
var namedFunctionExpression = function named() {
    console.log("This is a named function expression");
}

// First class functions -> Ability to use functions as values and pass them as arguments into other functions
// First class represents the fact that functions can be used as values and passed around
function normie() {
    console.log("I'm a normie");
}

function normie2(normie1) {
    console.log(normie1);
    return function firstclass() {
        console.log("I'm a first class function as I'm used as a value and returned out");
    }
}

// Now, normie is a first class function as it is used as a value and passed as an argument
// If a function is being returned as a value, it is also a first class function
let firstClass = normie2(normie);

// Arrow functions
// Newest addition through ES6
const arrow = () => {
    console.log("This is an arrow function");
}

/*
### Functions in JS
<aside> 💡 Functions are the heart of JS

</aside>
- Function Statement (or) Declaration
    - Creating a function ⇒ Function Statement
- Function Expression
    - Functions are assigned to variables
    - The major difference b/w expression and statement is Hoisting, functions are hoisted majava while variables are pucked up
    - code
	    ```jsx
	    let b = function (){
	    	console.log("This is b")
	    }
	    ```
- Anonymous Function
    - Function without a name
    - Anonymous - Similar to statement but does not have a name
    - Anonymous functions are used in place where the functions are plugged in as values
    - An anonymous function is often used in function expression
- Named Function Expression
    - In a function expression we use assign a function statement to the variable instead of an anonymous functions
- Parameters vs Arguments
    - Arguments are values that are passed in the function call
    - Parameters are local variables in the function - Label/Identifiers that get the values of arguments
- First Class Functions or First class citizens
	- It points to the ability of the function to be used as values and passed around
    - The ability to use functions as values - First Class functions
    - We can pass functions as arguments
    - We can also return a function from a function
*/