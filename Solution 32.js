//You get an array of numbers, return the sum of all of the positives ones.
function positiveSum(arr) {
    return arr.filter((nums) => nums > 0).reduce((acc,c) => acc + c, 0)
  }