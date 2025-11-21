/**
 * rand10
 * ------
 * Generates a random integer between 1 and 10 (inclusive).
 *
 * @returns {number} A random integer from 1 to 10
 */
function rand10() {
    return Math.floor(Math.random() * 10) + 1;}

// Display the result
console.log("Random number (1–10):", rand10());
