enum HtmlError {
    Ok= 200,
    Redirect = 300,
    BadRequest = 400,
    internalServerError = 500,
}

console.log(HtmlError);


// -
// Version 1:
// function showHtmlError() {
//     const randomNum = Math.ceil(Math.random() * 5);
//     randomNum = randomNum * 100;
//     console.log(randomNum);
//     if (randomNum < 300) {
//         console.log("HtmlError.", HtmlError[200]);
//     } else {
//         console.log("HtmlError.", HtmlError[randomNum]);
        
//     }

// };

// showHtmlError();



// Version 2

  
//   function showHtmlError(): void {
//     const randomNumber = Math.floor(Math.random() * 6); // Zufällige Zahl zwischen 0 und 5

//     switch (randomNumber) {
//       case 0:
//       case 1:
//       case 2:
//         console.log(`Fehler: ${HtmlError.OK} (OK)`);
//         break;
//       case 3:
//         console.log(`Fehler: ${HtmlError.Redirect} (Redirect)`);
//         break;
//       case 4: