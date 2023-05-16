//Given the a list of numbers, return the list so that the values increment by 1 for each index up to the maximum value.
function pipeFix(numbers){
    let result = []
    for(let i = numbers[0];i <= numbers[numbers.length -1];i++){
      result.push(i)
    } 
    return result
  }