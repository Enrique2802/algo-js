/**
 * Generates a random integer between 1 and 10 (inclusive)
 * @returns {number} A random integer between 1 and 10
 */
function rand10() {
  return Math.floor(Math.random() * 10) + 1;
}

/**
 * Generates an array of n random numbers between 1 and 10
 * @param {number} n - The number of random integers to generate
 * @returns {number[]} An array containing n random integers between 1 and 10
 */
function multiRand(n) {
  let result = [];
  for (let i = 0; i < n; i++) {
    result.push(rand10());
  }
  return result;
}

// Program that uses the function
let count = parseInt(prompt("How many random numbers do you want to generate?"));
let randomNumbers = multiRand(count);

console.log("Here are your " + count + " random numbers:");
console.log(randomNumbers);
