p1 = new Promise((res, rej) => {
    setTimeout(() => {
        res("p1");
    }, 2000)
})

p2 = new Promise((res, rej) => {
    setTimeout(() => {
        res("p2");
    }, 1000)
})

p3 = new Promise((res, rej) => {
    setTimeout(() => {
        res("p3 here");
    }, 3000)
})

console.log("start");

const result = Promise.all([p1,p2,p3]);
result.then(() => console.log(result))
.catch(error => console.log(error.message));

console.log("End");
