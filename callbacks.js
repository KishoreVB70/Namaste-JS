// Aync JS established through call backs
function y(msg){
    console.log(`I'm the call back function called from ${msg}`);
}


// Why this works perfectly
setTimeout(() => {
    y("time out");
}, 1000);

// While this doesn't work
// It is called instantly

// This is because the setTimeout function expects a call back, but y doesn't return a callback???
setTimeout(y("Time bot"), 1000);


// It would print undefined as the input is not given
// If I try to give input, then it is executed immediately
setTimeout(returner(y), 1000);

function x(y) {
    console.log(
        "This is the outer function"
    );
    y("Normal")
}

// This function returns the function y
function returner(y) {
    return y;
}

x(y)

// Event listeners Lore
let btp = document;
console.log(btp);
const btn = document.getElementById("bts");


// Count the number of times the button is clicked
let counter = 0;
btn.addEventListener("click", () => {
    console.log("clicked", ++counter);
})

// Creating closure to protect the count
// Now nothing other than the even listener can modify the counter variable
function eventProtector() {
    let counter = 0;
    btn.addEventListener("click", () => {
        let botesan = 0
        botesan++;
        console.log(botesan);
        console.log("clicked", ++counter);
    })
}
eventProtector();
