const birthyearForm = document.querySelector(".birthyear.form");
const userBirthyearInput = document.querySelector<HTMLInputElement>("#birthyear");
const outputDiv = document.querySelector(".output-area");

birthyearForm?.addEventListener("submit", calculateAge);

function calculateAge(event: Event){
    event.preventDefault();

    let userAge;

    if (userBirthyearInput){
        userBirthyear = Number(userBirthyearInput.value);
        userAge = 2025 - userBirthyear; 
        // return userBirthyear;
        // #wieder gleiches problem. 
    }

    if(outputDiv){
        outputDiv.innerHTML = `<h3>Hi. your age is ${userAge} </h3>`
    }

// 2025 - userBirthyear ;wo pack ich das hin??
}

