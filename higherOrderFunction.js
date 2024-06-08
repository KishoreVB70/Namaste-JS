// Calculate the circumference, area and diameter of circles
const radius = [1,4,7,9];

// All these 3 are callback functions
function area(radius) {
    return Math.PI * radius * radius;
}
function diameter(radius) {
    return 2 * radius;
}
function circumference(radius) {
    return Math.PI * 2 * radius;
}

// Higher order function
function calculate(fnc) {
    let output = [];
    for (let i = 0; i < radius.length; i++) {
        output.push(fnc(radius[i]));
    }
    return output;
}

// Map can be used instead of the calculate function

// Map will iterate through the array and supply each of the index value of the array to the 
// call back function and push the resulting return value into a new return array
console.log(radius.map(area));


// Creating calculate function similar to map
Array.prototype.cali = function (logic) {
    let output = [];
    for (let i = 0; i < this.length; i++) {
        output.push(logic(this[i]));
    };
    return output;
};

console.log(radius.cali(area));


// Calculate the stuffs
console.log("Circumference is: ", calculate(circumference));
console.log("diameter is: ", calculate(diameter));

/*
### Higher Order Functions - Functional programming
- Functional programming in JS is possible through higher order functions
- And that is possible because functions are **first class citizens** in JS
- Higher order function
	- Function which takes in another function as an argument
	- or returns a function
- The function which is passed on to another function is the callback function
- Functional programming is used to **modularize the code**
- Reduce repetition of function and modularize it
- **DRY -> don't repeat yourself**
- Code example -> Using higher order functions
	```
		const radius = [1,4,7,9];
		function area(radius) {
			return Math.PI * radius * radius;
		}
		function diameter(radius) {
			return 2 * radius;
		}
		function circumference(radius) {
			return Math.PI * 2 * radius;
		}
		function calculate(fnc) {
			let output = [];
			for (let i = 0; i < radius.length; i++) {
				output.push(fnc(radius[i]));
			}
			return output;
		}
	```
- Always **break down** your code into **smaller functional units** 
- Functional programming is separating out the code into as much as functions as possible to avoid repetition of code and using higher order functions to make all this possible
- `Array.prototype.name` -> this is used to create array functions which can be accessed by array.functionName
	- This keyword is used to reference the array inside of the function
*/