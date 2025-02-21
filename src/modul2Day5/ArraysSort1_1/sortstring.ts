const languages: string[] = [
    "JavaScript",
    "Python",
    "Java",
    "Ruby",
    "PHP",
    "C++",
    "CSS",
    "C#",
    "Go",
    "C",
    "TypeScript",
    "Swift"
];

const copiedLanguages = [...languages];

function sortAlphabetically(list: string[]) {
    console.log(list.sort());
}

sortAlphabetically(copiedLanguages);



const europeanCountries: string[] = [
    "Germany",
    "Austria",
    "Switzerland",
    "Ireland",
    "Netherlands"
];

sortAlphabetically(europeanCountries);