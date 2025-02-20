const numberInputForm = document.querySelector(".number-form");
const userNumberInput = document.querySelector<HTMLInputElement>("#number");
const outputDiv = document.querySelector(".output-area");

numberInputForm?.addEventListener("submit", doubleNumber);

function doubleNumber(event: Event){
    event.preventDefault();

    if (userNumberInput && outputDiv){
        let zahl = Number((userNumberInput.value))
        const multipliedNumber = (zahl * 2);
        outputDiv.innerHTML =
            `<h4>Hola. ciao. hi.</h4>
            <p>your funky fresh doubled number is: ${multipliedNumber}`
        }
    }

