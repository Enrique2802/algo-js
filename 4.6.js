/**
 * Calculates the factorial of a number using recursion
 * @param {number} a - A non-negative integer
 * @returns {number} The factorial of a (a!)
 */
function factorial(a) {
  // Base case: factorial of 0 or 1 is 1
  if (a === 0 || a === 1) {
    return 1;
  }
  
  // Recursive case: a! = a × (a-1)!
  return a * factorial(a - 1);
}

// Program to test the function
console.log("Factorial of 5: " + factorial(5));  // 120
console.log("Factorial of 4: " + factorial(4));  // 24
console.log("Factorial of 3: " + factorial(3));  // 6
console.log("Factorial of 0: " + factorial(0));  // 1
console.log("Factorial of 7: " + factorial(7));  // 5040
