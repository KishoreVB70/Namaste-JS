function x() {
    let a = 44;

    function x() {
        a = 54;
        console.log("Function statement");
        console.log(a);
    }

    console.log("Before time out");

    // Even 0.1 milli second is enough to run the 2 lines after this befor executing the callback
    setTimeout(x, 0.1);

    // Set time out is async, it will wait in the side and the other code will run
    console.log("After time out")
    // a would still be 44 as it is not set to 54 yet
    console.log(a)
}

// Print every number till 5 at an interval of 1 second

// Everything is printed instantly if it is not a function but a statement
function y() {
    setTimeout(function p() {
        console.log(1)
    }, 1000);
    setTimeout(function p() {
        console.log(2)
    }, 2000);
    setTimeout(function p() {
        console.log(3)
    }, 3000);
    setTimeout(function p() {
        console.log(4)
    }, 4000);
    setTimeout(function p() {
        console.log(5)
    }, 5000);

    // After comes before all the time outs
    console.log("After");
}



// Using a for loop instead of writing everything again and again


// If I use var, it prints 6 all the time
// Variable i is hoisted in the local scope here
function varF() {
    for (var i = 1; i <=5; i++) {
        // It would print 6 everytime as at the end of all stuff, i is increased and is 6
        // The function is called only at the end of the for loop where the value of i is 6
        setTimeout(function () {
            console.log(i);
        }, i * 1000);
    }
}
            
// If I use let in the for loop, it prints 1 - 5 correctly
// The variable i is hoisted in the block scope here
function letInForLoop() {
    for (let i = 1; i <=5; i++) {
        setTimeout(function () {
            console.log(i);
        }, i * 1000)
    }
}
// If I use let separately and use the variable, for the loop, then it prints 6
// The variable i is hoisted in the local scope
function letSeparateVariable() {
    let i = 1;
    for ( i ; i <=5; i++) {
        // It would print 6 everytime as at the end of all stuff, i is increased and is 6
        // The function is called only at the end of the for loop where the value of i is 6
        setTimeout(function () {
            console.log(i);
        }, i * 1000)
    }
}
varF();
letInForLoop();
letSeparateVariable();
console.log("After")