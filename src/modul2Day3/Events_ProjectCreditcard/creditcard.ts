const outputDiv = document.querySelector(".output-div");
const outputNumber = document.querySelector<HTMLInputElement>(".number-placeholder");
const outputName = document.querySelector<HTMLInputElement>(".name-placeholder");
const outputDate = document.querySelector<HTMLInputElement>(".expiration-placeholder");

const form = document.querySelector(".card-form")
const userNumber = document.querySelector<HTMLInputElement>("#card-number");
const userName = document.querySelector<HTMLInputElement>("#card-holder");
const userDate = document.querySelector<HTMLInputElement>("#expiration-date");

form?.addEventListener("submit", fillCard);

function fillCard(event: Event) {
    event.preventDefault();

console.log("hdier");

// check if the html elements are existent
    if (form && userNumber && userName && userDate && outputDiv && outputNumber && outputName && outputDate){
        // console.log("html complete");
        
        const number = userNumber.value;
        const name = userName.value;
        const date = userDate.value;
        // console.log(number, name, date);

        // change the info on the card
        outputNumber.innerHTML = `${number}`
        outputName.innerHTML = `${name}`
        outputDate.innerHTML = `${date}`

        // empty the input fields
        userNumber.value=""
        userName.value=""
        userDate.value=""
    }

}



// IDEA for validate expiration date
// const expiration = userExpiration.value;
// const today = newDate();
// if (expiration < today)|{
//     error = "Ihre Karte ist abgelaufen."
// }


// IDEA Let the User choose a different card design. 
//  like with the superballs to change the color.