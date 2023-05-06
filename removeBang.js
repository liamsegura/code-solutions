

// Remove an exclamation mark from the end of a string. 
//For a beginner kata, you can assume that the input data is always a string, no need to verify it.


//param -> Str, always string, never empty, always contains ! at the end
//return Str without ! as a str
//"Example!" -> returns "Example"


// function removeBang(str){

//     //remove last char from string || create arr from str
//     let newStr = str.slice(0, -1)
//     //return str without last char/element
//     return newStr

// }

const removeBang = str => str.slice(0, -1)

console.log(removeBang('Liam!'), "Liam")
console.log(removeBang('Interview!'), "Interview")