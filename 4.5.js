/**
 * Calculates the distance between two points in a 2D space
 * @param {number[]} pointA - The coordinates of the first point [x, y]
 * @param {number[]} pointB - The coordinates of the second point [x, y]
 * @returns {number} The distance between the two points
 */
function calcDistance(pointA, pointB) {
  // Extract coordinates from the points
  let x1 = pointA[0];
  let y1 = pointA[1];
  let x2 = pointB[0];
  let y2 = pointB[1];
  
  // Calculate differences
  let deltaX = x2 - x1;
  let deltaY = y2 - y1;
  
  // Apply distance formula: √[(x₂ - x₁)² + (y₂ - y₁)²]
  let distance = Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));
  
  return distance;
}

// Program to use the function
let pointA = [1, 1];
let pointB = [2, 2];

let result = calcDistance(pointA, pointB);
console.log("Distance between " + pointA + " and " + pointB + " is: " + result.toFixed(2));

// Test with other examples
console.log(calcDistance([1, 1], [3, 1])); // Should be 2
console.log(calcDistance([4, 1], [1, 1])); // Should be 3
console.log(calcDistance([-2, 2], [2, -2])); // Should be 5.65
