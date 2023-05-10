
//take two strings, reverse them and combine them

//params -> always strings, just chars, no funny business
//"Str","Str" -> "rtSrtS" 


// function reverseTwoStrings(str1,str2){

//     //create two variables, split them into arrays
//     //reverse and join them indivitually
//     let newStr1 = str1.split('').reverse().join('')
//     let newStr2 = str2.split('').reverse().join('')
  
//     //use template literal to combine them
//     const resultingStr = `${newStr1}${newStr2}`

//     return resultingStr

// }

const reverseTwoStrings = (str1,str2) => `${str1.split('').reverse().join('')}${str2.split('').reverse().join('')}`

console.log(reverseTwoStrings('Str','Str'), "rtSrtS" )
console.log(reverseTwoStrings('Srt','Srt'), "trStrS" )
