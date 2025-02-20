console.log(
    "%c === slice the array ===", "background-color: teal;"
);


const destinations: string[] = [
    "Schweden",
    "Polen",
    "Italien",
    "Norwegen",
    "Griechenland"
]

console.log(destinations);
const removedAt2 = destinations.slice(2,4);
console.log("removed", removedAt2);
console.log(destinations);



// - original array is not edited <3 i just temporarily take a piece out of it