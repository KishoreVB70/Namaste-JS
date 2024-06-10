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

function all() {
    const result = Promise.all([p1,p2,p3]);

    result.then((res) => console.log("from then: ", res))
    .catch(error => console.log(error.message));
    
    async function allsync() {
    const result = await Promise.all([p1,p2,p3]);
    console.log("from async: ", result);
    }
    allsync();
    
    console.log("End");
}
all();