let a = 40;
function x() {
    let b = 30;
    let bro = y()
    console.log(a)
    return bro;

    function y() {
        let c = 20;
        let bro = z();
        console.log(a)
        return bro;

        function z() {
            let d = 10;
            console.log(a);
            return w;

            function w() {
                let e = 1;
                // Sincle c is not present in this function, the closure of function y will not be in scope
                console.log(b + d + e);
                console.log("Huwawei");
            }
        }
    }
}

// Function w is returned along with it's closure
let w = x()
console.log(w);

// It would work fine as it contains the lexical environment
w();

/*
### Closures
- During the memory allocation part for a new function space, the JS engine looks through the variables, if they are not present in the scope, then it looks at the lexical parent, if it is present in the lexical parent, then the engine brings the closure into the scope, if not, the closure would not be on the scope
> A function bind together with its lexical environment (scope)
- Function + lexical scope -> closure
- In JS a function can be returned from a function
- Code
	```
	function puffy() {
		function pummy() {}
		return pummy
	}
	// The function is returned to y now
	let y = puffy()
	
	```
- Even if the function inside a function is returned to the outer scope, it still remembers their lexical scope - It still has the binding with the lexical parent
- **A closure is returned along when a function is returned** - Function + Lexical Scope
- The functions remembers the **reference** to the variable location rather than the value
- If a function is returned, then the variables in the entire scope and closure is **not garbage collected** and is persistent through out the code
*/