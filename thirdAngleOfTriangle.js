// You are given two interior angles (in degrees) of a triangle.

// Write a function to return the 3rd.

// Note: only positive integers will be tested.

// https://en.wikipedia.org/wiki/Triangle


function otherAngle(a, b) {
    let sum = a + b 
    let thirdAngle = 0
    while(sum < 180){
      sum += 1
      thirdAngle += 1
    }
    return thirdAngle
  }


const alternativeAngle = (a,b) => 180 - (a - b)