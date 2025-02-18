function getAge(birthYear: number){
    let ageInside = 2025 - birthYear;
    return ageInside;
}

let ageOutside = getAge(1986);
console.log(ageOutside);

// * Function that compares 2 Ages
function compareAge(birthYear1: number, birthYear2: number){
    let ageInside1 = 2025 - birthYear1;
    let ageInside2 = 2025 - birthYear2;
    let altersDifferenz = ageInside1 - ageInside2;
    return altersDifferenz;
}

console.log("Altersunterschied: " + compareAge(1986, 1990)+ " Jahre");
