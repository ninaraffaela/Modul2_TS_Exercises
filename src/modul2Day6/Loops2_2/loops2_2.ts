const form = document.querySelector("form");
const userNumber = document.querySelector<HTMLInputElement>("#input-number");
const output = document.querySelector(".output-div");


form?.addEventListener("submit", addOsintoHTML);
function addOsintoHTML (event: Event) {
    event.preventDefault();
    // console.log("abgeschickt");
    if (userNumber && output){

        let numberOfOs = Number(userNumber.value);

    
        let oString = "";
        for (let i = 0; i < numberOfOs; i++) {
            oString += "o"; // what you have plus one more o
            console.log(oString); //shows how the oString evolves
        }
       
        output.innerHTML = `L${oString}p`;
    }

}



// - is userNumber existent
// - is output existent
// - write l
// - write p
// - write os until value of usernumber is reached
