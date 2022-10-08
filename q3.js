let personName = "Muhammad SalMaN Saleem"

let lowerCase = personName.toLowerCase();
let upperCase = personName.toUpperCase();

function titleCase(str) {
    return str.split(' ').map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase()).join(' ');
}

console.log(`Lower case:  ${lowerCase}`);
console.log(`Upper case:  ${upperCase}`);
console.log(`Title case:  ${titleCase(personName)}`);
