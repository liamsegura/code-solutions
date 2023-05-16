//get the sum of two arrays...actually the sum of all their elements.
function arrayPlusArray(arr1, arr2) {
    return arr1.concat(arr2).reduce((acc,c) => acc + c, 0)
  }