

//arr -> always an array, never empty
//returns -> arr reversed
//arr [2,4,4] -> [4,4,2]


// function reverseArr(arr){

//     let reversedArray = arr.reverse()

//     return reversedArray
// }


const reverseArr = arr => arr.reverse()


console.log(reverseArr([1,2]), '[2,1]')
console.log(reverseArr([1,3]), '[3,1]')