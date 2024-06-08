const arr = [4,12,24,88, 9];


const mapper =  (arr)=> {
    // Map function
    console.log(arr.map(doubler));

    function doubler(i) {
        return i * 2;
    }
    
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
}

const filterer = (arr) => {
    // The filter metho's callback must include a function which returns true or false
    // If true, then added in the return array
    const oddNums = arr.filter((x) => x % 2);
    const evenNums = arr.filter((x) => x % 2 === 0);
    console.log(oddNums, evenNums);
}
filterer(arr);