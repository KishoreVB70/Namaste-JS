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
// filterer(arr);

const reducer = (arr) => {

    // find the sumof the array -> traditional method
    let sum = 0;
    for (let i = 0; i < arr.length; i ++) {
        sum += arr[i];
    }

    // Find the sum of all elements of array
    const redSum = arr.reduce((sum, i) => sum += i);

    // Find largest num using reduce
    // The second argument to reduce is the initial value of sum(the accumulator)
    const largest = arr.reduce((sum, i) => {
        if (i > sum) {
            sum = i 
        }
        return sum;
    }, 0);

}

// Real world examples

const users = [
    {
        firstName: "Berna",
        lastName: "Melben",
        age: 22
    },
    {
        firstName: "Ranjina",
        lastName : "Ranjith",
        age: 23
    },
    {
        firstName: "Kane",
        lastName: "Willamson",
        age: 37
    },
    {
        firstName: "Shri",
        lastName: "Divya",
        age: 22
    }
]

/*
from the list of users which contain their first name and last name,
concatenate the first name with second name and push as a string to the array
*/
const namer = (users) => {
    const fullNames = users.map( (x) => x.firstName + " " + x.lastName);
    console.log(fullNames);
}

/*
from the user objects, find the number of users with the same
age as the given input
*/
const findSameAgerNum = (arr, age) => {
    const result = arr.reduce((acc, cur) => {
        if (cur.age === age) {
            acc += 1;
        }
        return acc;
    },0);
    console.log(result);
}

/*
Return an object of each value
*/
const findRepetitionAllAge = (arr) => {
    const resultObject = arr.reduce( (acc, curr) => {
        // Check if the element is already present in the object
        if (acc[curr.age]) {
            acc[curr.age]++
        } else {
            acc[curr.age] = 1;
        }
        return acc;
    }, {})

    console.log(resultObject);
}