//Write a program that finds the summation of every number from 1 to num.
var summation = function (num) {
    let sum = 0
    for(let i = 0;i <= num;i++){
        sum += i
    }
    return sum
  }