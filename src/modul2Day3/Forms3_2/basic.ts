const fontSizeInput = document.querySelector<HTMLInputElement>("#font-size");
const fontFamilyInput = document.querySelector<HTMLInputElement>("#font-family");
const textInput = document.querySelector<HTMLInputElement>("#text-input");

const outputDiv = document.querySelector<HTMLParagraphElement>(".output-area");

// - textInput
textInput?.addEventListener("input", changeText);

function changeText() {
    if(outputDiv && textInput) {
        outputDiv.innerHTML = textInput.value;

    }
}

// - fontSize
fontSizeInput?.addEventListener("input", changeFontSize);

function changeFontSize(){
    if (fontSizeInput && outputDiv){
        outputDiv.style.fontSize = fontSizeInput.value + "px";
        console.log(fontSizeInput.value + "px");
        
    }
}

// - fontFamily

fontFamilyInput?.addEventListener("input", changeFont);

function changeFont(){
    if (fontFamilyInput && outputDiv){
        outputDiv.style.fontFamily = fontFamilyInput.value;
    }
}