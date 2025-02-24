const output = document.querySelector(".output-Div");


let counterForDoWhile = 1;

if (output) {
do {
    console.log(`the number is ${counterForDoWhile}`);
    output.innerHTML += `the number is ${counterForDoWhile}<br>`;
    counterForDoWhile++;
    
} while (counterForDoWhile <= 5);
}

// - what to use instead of br?