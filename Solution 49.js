//Your task is to write a function that takes a string and return a new string with all vowels removed.
function disemvowel(str) {
    const vowles = ['a', 'e', 'i', 'o', 'u'];
    let newArr = []
  
    str.split('').forEach(letter => {
      if(!vowles.includes(letter.toLowerCase())) {
      newArr.push(letter)
      }
    })
    return newArr.join('')
  }