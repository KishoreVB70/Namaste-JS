// Explain the lexical environment and the scope chain

var va = 20;

function a() {
    // Has access to the global space
    console.log(va)
    var vb = 21;
    aa()

    // Lexical child of function a
    function aa() {
        var vc = 41;

        // Has access to all the variables here
        console.log(va);
        console.log(vb);
        console.log(vc);

        // Doesn't have access to this eventhough it was called from the other function
        // aa is not the lexical child of b and hence doesn't have access to it's local variables
        console.log(vbb);
    }
}

// Lexical child of the global scope
function b() {
    console.log(va);
    var vbb = 42;
    aa();
}

/*
### Scope Chain
> Scope - Where can we access a variable or a function
- Scope is directly dependent on the **lexical chain(Environment)**
- Lexical - Hierarchy or inheritance
- Lexical environment - The local memory + lexical environment of its parent
- A function code must **physically be inside** another function to be part of the lexical environment, not just call it inside
- Whenever a execution context is created, it also gets a **reference to the lexical environment** of its parent
- Lexical environment is created for every new execution context, even the global execution context has a lexical reference which **points to NULL**
- If a variable is not present in the local environment, then the engine looks for it in the lexical parent, and then onto it's lexical parent and so on
	- The chain pattern of looking at the **parents reference** is the **scope chain**
*/