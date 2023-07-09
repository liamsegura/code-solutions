const arrayWithMultiples = (n) => {

    let multipleOfThree = 0
    let multipleOfFive = 0
    let multipleOfThreeAndFive = 0

    if(typeof n !== "number"){
        throw new Error('Argument given must be a number')
    }
    for (let i = 1; i < n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
          multipleOfThreeAndFive += 1
        } else if (i % 3 === 0) {
            multipleOfThree += 1
        } else if (i % 5 === 0) {
            multipleOfFive += 1
        }
      }
      

   return [multipleOfThree, multipleOfFive, multipleOfThreeAndFive]

}

module.exports = arrayWithMultiples

//7627122