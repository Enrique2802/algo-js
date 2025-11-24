/**
 * Randomly selects n learners from an array of learners
 * @param {string[]} inputAr - An array of learner names
 * @param {number} n - The number of learners to randomly select (must be > 0 and <= inputAr.length)
 * @returns {string[]} An array containing n randomly selected learners
 */
function pickLearner(inputAr, n) {
  let selected = [];
  let availableLearners = [...inputAr]; // Create a copy to avoid modifying the original
  
  for (let i = 0; i < n; i++) {
    // Generate a random index
    let randomIndex = Math.floor(Math.random() * availableLearners.length);
    // Add the learner at that index to selected array
    selected.push(availableLearners[randomIndex]);
    // Remove that learner so they can't be picked again
    availableLearners.splice(randomIndex, 1);
  }
  
  return selected;
}

// Example usage
let learners = ["Enrique","Lucas","Ethan","Micael","Dorian","Johan","Abdoul","Jonathan","Matthias",
"Julien","Lindsay","Isaac","Kev","Thomas","Léandre","Dimitri","Gaëtan"];
let picked = pickLearner(learners, 3);

console.log("Randomly selected learners:");
console.log(picked);
