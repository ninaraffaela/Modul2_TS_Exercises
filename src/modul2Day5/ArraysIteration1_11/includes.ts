let string = "Peter Piper picked a peck of pickled peppers. How many pickled peppers did Peter Piper pick?";

// - Piper in uppercase //true
const includesPiper = string.includes("Piper");
console.log(includesPiper);


// - piper in lowercase //false
const includesPiperSmall = string.includes("piper");
console.log(includesPiperSmall);

// - Turn the whole string to lowercase and search for that
const stringSmall = string.toLowerCase();
const includesPiperBetter = stringSmall.includes("piper");
console.log(includesPiperBetter);




// - piper from the word peck (position 22) //true
const includesPiperBetterFromPeck = stringSmall.includes("piper",22);
console.log(includesPiperBetterFromPeck);

// - Piper from the word peck (position 22) //false
const includesPiperBetterFromPeckUpper = stringSmall.includes("Piper",22);
console.log(includesPiperBetterFromPeckUpper);
