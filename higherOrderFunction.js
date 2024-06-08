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

// Calculate the area
console.log("Area is: ", calculate(area));
console.log("Circumference is: ", calculate(circumference));
console.log("diameter is: ", calculate(diameter));