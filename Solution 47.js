//Your task is to sum the differencees between consecutivee pairs in the array in descending order.
function sumOfDifferences(arr) {
    return arr.sort((a,b) => b - a)
              .map((a,i) => a - arr[i + 1] || 0)
              .reduce((acc,c)=> acc + c, 0)
  }