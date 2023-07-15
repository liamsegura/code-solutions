//given array, sum positives

const sumpos = (arr) => {

   return arr.filter(num => num > 0).reduce((a,b) => a + b) 
}

console.log(sumpos([1,-1,2]), "3")

console.log(sumpos([4,-2,2]), "6")