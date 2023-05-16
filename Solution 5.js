//In this simple exercise, you will build a program that takes a value, integer , and returns a list of its multiples up to another value, limit . If limit is a multiple of integer, it should be included as well. 
function findMultiples(integer, limit) {
    let list = []
    for(let i = integer;i <= limit;i++){
      if(i % integer === 0){
        list.push(i)
        
      }
    }
    return list
  }