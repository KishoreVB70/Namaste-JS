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