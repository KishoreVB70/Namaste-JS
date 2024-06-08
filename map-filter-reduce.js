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

/*
get the array of all the first name of users whose age is below 30
*/

const below30 = (arr) => {
    //use filter with map separately
    const result1 = arr.filter((i) => i.age < 30);
    const result2 = result1.map((i) => i.firstName);
    
    // Chaining them together
    const final = arr.filter((i) => i.age < 30).map((i) => i.firstName);

    // using reduce instead
    const redFinal = arr.reduce((acc, cur) => {
        if (cur.age < 30) {
            acc.push(cur.firstName);
        }
        return acc;
    }, [])
    console.log(redFinal);
}
below30(users);

/*
### Map, Filter and Reduce
- Map
	- Used to transform an array
	- It is called map as it maps each of the elements of the array into another value using the callback function logic
	- Convert the values of an array into something else based on the callback function and return a new array
	- The callback function should signify the operation done to one element
	- 
	- Takes in a callback function, iterates through the input array to perform the operation of the callback function and returns the array with the function operated values
	- Code
		```
		areaArray = array.map(area);
		```
- Filter
    - Used to Filter elements inside an array
    - Similar to map, creates a new array by iterating the current array and using the callback function on each of the individual elements
    - The callback function needs to have logic which returns **true or false**, if it is true, then the value is added to the new array
- Reduce
    - Iterate through an array and come up with a single value
    - Eg
	    - iterate through the entire array and find the sum of all the elements
	    - Find largest num
	- The callback function should take 2 arguments
		1. **Accumulator** -> the variable which stores the sum like value
		2. **Current** -> the current iteration value of the array
	- The reduce function itself takes 2 arguments
		1. The callback function
		2. The initial value of accumulator
- **Methods chaining**
	- If a logic is needed such that it requires both filter or map or reduce, then they can be chained together
	- Take a look at the github for code example
	- `result = arr.filter(logic).reduce(logic)`
*/
