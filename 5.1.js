function askTvSerie() {
  // Ask for the basic info
  const name = prompt("Enter the TV serie name:");
  const year = prompt("Enter the production year:");

  // Collect cast members
  const cast = [];
  let addMore = true;

  while (addMore) {
    const member = prompt("Enter a cast member's name:");
    if (member) {
      cast.push(member);
    }
    addMore = confirm("Do you want to add another cast member?");
  }

  // Return a structured object
  return {
    name: name,
    productionYear: parseInt(year),
    cast: cast
  };
}

// Example usage
const myTvSerie = askTvSerie();
console.log(JSON.stringify(myTvSerie, null, 2));
