console.log("Start");
function cb() {
    console.log("Called");
}

setTimeout(cb, 1000);
// Any function inside the settimeout will not be part of the global scope,
// It would be part fo the local scope
setTimeout(function puffy() {
    console.log(puffy);
}, 10);

console.log("End");

// If there are code which take more than a second, then the call back 
// can be executed only after all the code is finshed executing

// Simulation code which would run for 5 seconds
const startTime = new Date().getTime();
let endTime = new Date().getTime();

while (startTime + 5000 > endTime) {
    endTime = new Date().getTime();
}

console.log("While ends");

// Only after this the 1 second callback will be called