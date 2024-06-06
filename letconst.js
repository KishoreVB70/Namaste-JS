//undefined -> no error as var
console.log(a);

// Hoisted in the global object
var a = 20;

// Reference error for accessing b before initialization
console.log(b);

// Reference error for accessing variable not part of memory -> Not defined
console.log(x);

// Hoisted in the script object in global execution context
let b = 20;

const c = 40;

// Type error as const can't be reassigned
c = 40;


// Syntax error as let and const variables cannot be reinitialized
var b = 40;

// Syntax error as const must be initialized
const l;

/*
### Let and Const vs Var
- Let and cost was introduced in [[ES6]]
- Any variable which is not initialized, but only declared will have the type undefined
- Var is not preferred for much use cases
- Hoisting is the difference between let, const vs var
	- Var is hoisted(Given Memory) in the global object
	- Let and Const are hoisted in a separate space(**Script**) and they **cannot be accessed** before **initialization** -> result in **reference error**
	- **Script** is a separate object in the scope which contains the let and const variables
- Temporal Dead Zone - The time from which the variable is hoisted and it is assigned a value(initialized)
- Whenever we access a variable in the TDZ, we get a **reference error** indicating that we cannot access the variable before initialization
	- Instead of the not defined error we get for variables which are not allocated memory
- **Re declaration** of variable with the same name can be done for var, but not for let and const
- Const behaves the same as the let but is **immutable** - A value **must be assigned** on the declaration and cannot be done after
- Different errors In js
    - Reference error - Accessing a variable which is not available in the scope - **TDZ** and **not defined**
    - Syntax Error - thrown out even **before** the engine starts **executing** the code
	    - Re declaring a const or let variable which is **already declared**
	    - Not initializing value to const
    - Type Error - Re assigning the value to a const
*/