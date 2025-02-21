const outputDiv = document.querySelector("div");

const getraenke: string[] = [
    "Coca-Cola",
    "Apfelsaft",
    "Pepsi",
    "Traubensaft",
    "Sprite",
    "Orangensaft",
    "Red Bull Energy Drink",
    "Fanta"
];

function myDrinks(list: string[]) {
    getraenke.sort().forEach((singleDrink) => console.log(singleDrink));

    if (outputDiv){
        getraenke.forEach((singleDrink) => outputDiv.innerHTML += `<li>${singleDrink}</li>`)
    }
}

myDrinks(getraenke);