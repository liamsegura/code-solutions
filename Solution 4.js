//given an integer or a floating-point number, find its opposite.
function opposite(number) {
    if(number >= 0){
      return -Math.abs(number)
    }
    else{
      return Math.abs(number)
    }
  }

//or

function opposite(number){
    return -number
}