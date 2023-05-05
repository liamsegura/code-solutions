//Make a function that will return a greeting statement that uses an 
//input; your program should return, "Hello, <name> how are you doing today?".


//<NAME> -> Str, always chars, never empty, make sure capitalised first letter, no funny business
//returns first letter cap, rest lower case, "Hello, <name> how are you doing today?"
//"lIaM" -> "Liam"


// function helloName(name){

//     let nameResult = `${name.charAt(0).toUpperCase()}${name.slice(1).toLowerCase()}`
//     let speechResult = `Hello, ${nameResult} how are you doing today?.`
//     return speechResult

// }

const helloName = name => `Hello, ${name.charAt(0).toUpperCase()}${name.slice(1).toLowerCase()} how are you doing today?`


console.log(helloName('lIaM'), "Hello, Liam how are you doing today?")
console.log(helloName('STEve'), "Hello, Steve how are you doing today?")