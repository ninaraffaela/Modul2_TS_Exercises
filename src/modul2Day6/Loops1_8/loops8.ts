const output = document.querySelector(".output-div");

let counterForDoWhile = 2;

if(output) {
do {
    console.log(counterForDoWhile);
    output.innerHTML += `<p>${counterForDoWhile} </p>`;
    counterForDoWhile += 2; //+2 would not work

} while (counterForDoWhile <= 20);
}

// - what to use instead of br? => p tag

