let users = ["Eric", "David", "Admin", "Mark", "Bob"]
let loginUser = "mark"
users.forEach(user =>{
    if(user == "Admin"){ console.log("Hello Admin, would you like to see a status report?")}else { console.log(`Hello ${user}, thank you for logging in again.`)
}})