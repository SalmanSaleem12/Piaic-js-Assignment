let person = ["Rohan", "Qasim", "Faseeh"]
let invite = "you  are invited at my place for dinner tomorrow evening."

console.log(`${person[2]} can't make it to come for the dinner`);

person[2] = "Saad"

person.forEach(persons =>{
    console.log(persons + " " + invite);
})
console.log("Guys! I am inviting more people at the dinner as I have found a bigger dinnner table.")