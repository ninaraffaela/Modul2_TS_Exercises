// - Variablen anlegen um mit html zu verheiraten - 4 divs 
const tealColor = document.querySelector('.teal');
const salmonColor = document.querySelector('.salmon');
const thistleColor = document.querySelector('.thistle');
const cornflowerColor = document.querySelector('.cornflower');
const meineH1 = document.querySelector<HTMLBodyElement>("h1");

const bodyColor = document.querySelector("body");

// ! TEAL
tealColor?.addEventListener("click", turnTeal);

function turnTeal(){
    if (bodyColor && meineH1){
        bodyColor.style.backgroundColor = "teal"; 
        meineH1.style.color = "white";
    
    }
}


// ! SALMON
salmonColor?.addEventListener("click", turnSalmon);

function turnSalmon(){
    if (bodyColor){
        bodyColor.style.backgroundColor = "salmon"; 
    }
}


// ! THISTLE
thistleColor?.addEventListener("click", turnThistle);

function turnThistle(){
    if (bodyColor){
        bodyColor.style.backgroundColor = "thistle"; 
    }
    
}

// ! CORNFLOWERBLUE

cornflowerColor?.addEventListener("click", turnCornflower);

function turnCornflower(){
    if (bodyColor){
        bodyColor.style.backgroundColor = "cornflowerblue"; 
    }
    
}
