console.log("Start");

// Time outs are pushed on to the Task queue once after completion
setTimeout(() => {
    console.log("Time out");
}, 2000)

// DOM callbacks are also pushed on to the Task queue
// Anything other than promises and the mutation observers callbacks are pushed to the Microtask queue
const btn = document.getElementById("click-btn");
btn.addEventListener("click", () => {
    console.log("Clicked");
})

// All type of promises are pushed on to the Micro task queue after completion
// Calbacks in the microtask queue have higher priority than the Task queue 
fetch("https://api.netflix.com")
.then(() => {
    console.log("Fetch")
})

console.log("end");