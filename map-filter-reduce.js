console.log("Mapper");

const arr = [4,12,24,88];

function doubler(i) {
    return i * 2;
}


// Map function
console.log(arr.map(doubler));

// A cuber function, but instead written as an arrow function
let cube = arr.map((i) => {
    return (i * i * i);
})

// Convert into binary
let binary = arr.map((i) => {
    // return 
    i.toString(2);
})

// if there is only one line in a function, then return is not necessary by removing the curly braces
let triple = arr.map((i) => i * 3);
console.log(triple);