var a = 22;

// Print the variable in the local environment
function botton() {
    var a = 24
    console.log(a);
}

function boton() {
    console.log(a);
}

function cotton() {
    var a = 40;
    //Boton is inside cotton, so it will print 40
    boton()
    console.log(a);
}

// 24
botton()

//22
boton()

//40
cotton()