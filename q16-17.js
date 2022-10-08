let person = ["Rohan", "Qasim", "Faseeh"]
let invite = "you  are invited at my place for dinner tomorrow evening."

person.unshift("Murtaza")
person.splice(2, 0, "Muhammad")
person.push("Mustafa")

person.forEach(persons =>{
    console.log(persons + " " + invite);
})

console.log("\nSorry guys i can invite only two people right now!\n")

let removedPerson1 = person.pop()
console.log(`Sorry ${removedPerson1}, I can't invite you to dinner`)
let removedPerson2 = person.pop()
console.log(`Sorry ${removedPerson2}, I can't invite you to dinner`)
let removedPerson3 = person.pop()
console.log(`Sorry ${removedPerson3}, I can't invite you to dinner`)
let removedPerson4 = person.pop()
console.log(`Sorry ${removedPerson4}, I can't invite you to dinner`)

person.forEach(persons =>{
    console.log(persons + " " + invite);
})

while(person.length > 0){
    person.pop()
  
}
console.log(person)

