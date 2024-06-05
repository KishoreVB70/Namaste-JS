var a = 22;

// Print the variable in the local environment
function botton() {
    var a = 24
    console.log(a);
}


// The lexical environment of this function is the global environment
// Regardless of where this function is called, it would look at the global variable environment
function boton() {
    console.log(a);
}

function cotton() {
    var a = 40;
    //Boton has global as the lexical enviroment
    boton()
    console.log(a);
}

// 24
botton()

//22
boton()

//40 and 22
cotton()

/*
- Every function has its own execution context
- Hence all functions declared inside the function will be only available for the function and can also contain the same variable as the global environment
- This is possible as the engine looks at first at the current environment for the variable
- If a variable is not present in the local context, then it goes onto the **lexical scope environment**
	- The scope of the function depends on where it is defined rather than from where it is called
*/