// Hoisted globally
var a = 20;

// Hoisted in script 
let b = 20

function hi() {
    // Hoisted locally -> in the local scope
    var a = 4;
    // Hoisted locally
    let c = 50;

    // Present in the local scope of the function hi
    function butterFruit() {
        var a = 5;
        let b = 55;

        // can be accessed due to the lexical scope chain -> closure
        console.log(c);
    }
    butterFruit();
}

hi();
console.log(a);

{
    // Hoisted globally
    // This is the second global declaration of var a
    // This wil globally change a into 40
    var a = 40;

    // Hoisted in the block scope and does't show an error because they don't interfere with each other
    let b = 50;
}

console.log(a);

/*
### Block Scope
- A block is within every curly braces `{ }`
- Block is also called as a **compound statement**
- It combines multiple JS statements into a **group**
- These grouped statements can be used in place where JS expects only one
	- Eg -> if statements where only one statement is the output of the if
	- These blocks are used in if statements where if only asks for 1 statement and in functions
- Block **scope** -> The variables and functions that can be accessed within the block
- Var is function scoped and is **hoisted globally** if it is within a block
- Let and Const are hoisted on the block scope(If they are inside a block)
- The var can be accessed outside of the block as it is hoisted globally
	- If the var is present inside of a function, then it is hoisted locally, if it is inside a block, it is hoisted globally
- Now we come down into the 4 hoisting scope in JS
	1. Global scope -> var and functions in global scope + var inside of blocks
	2. Script scope -> let and const 
	3. Block scope -> let and const within a block
	4. Local scope -> variables and functions inside of a function
- Variable Shadowing
    - If a variable is declared inside a block using var, then that value inside shadows the global var - This is because, both the vars points to the same location in memory, changing the var assignment will change the memory value itself
    - For let and const, the value is shadowed only inside the block and it does not mutate the original value]
    - **Illegal shadowing** - We can not shadow a let in global scope using var inside a block the vice versa is doable
	    - This is because they both come under the same scope -> Script and global which interfere with each other and same variable name can't be used
- Block scope also follows a lexical scope
*/