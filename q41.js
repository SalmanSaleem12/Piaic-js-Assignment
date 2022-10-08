magician_names = ['Tim', 'David', 'Bob']
console.log("Magicians Name.\n");

function show_magicians(n) {
    for (magician of n) {
        console.log(magician)
    }
}

show_magicians(magician_names)