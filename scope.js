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