//Given a sequence of numbers, find the largest pair sum in the sequence.
function largestPairSum (numbers) {
    return numbers.sort((a,b) => a - b).slice(-2).reduce((acc,c) => acc + c, 0)
  }
//or:
//numbers.sort((a,b) => b - a) 
//return numbers[0] + numbers[1]
