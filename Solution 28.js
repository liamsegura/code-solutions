//Create the function that takes as a parameter a sequence of numbers represented as strings and outputs a sequence of numbers. Must include floats
function toNumberArray(stringarray){
    return stringarray.map(x => parseFloat(x))
   }