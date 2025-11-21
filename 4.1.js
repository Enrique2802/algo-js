/**
 * calcSurface
 * -----------
 * Calculates the surface (area) of a rectangle.
 *
 * @param {number} length - The length of the rectangle
 * @param {number} width  - The width of the rectangle
 * @returns {number} The surface of the rectangle (length * width)
 */
function calcSurface(length, width) {
    return length * width;
}

// Ask user for input
let length = Number(prompt("Enter the length of the rectangle:"));
let width = Number(prompt("Enter the width of the rectangle:"));

// Calculate the surface using the function
let surface = calcSurface(length, width);

// Display the result
console.log("Length:", length);
console.log("Width:", width);
console.log("Surface of the rectangle:", surface);
