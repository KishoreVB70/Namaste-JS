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