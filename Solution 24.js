// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!
function areYouPlayingBanjo(name) {
 if(name.toLowerCase().charAt(0) === "r"){
  return name + " plays banjo"
    }
 else{
   return name + " does not play banjo"
 }
}

//||

function areYouPlayingBanjo(name) {
return name + (name[0].toLowerCase() == 'r' ? " plays" : " does not play" + " banjo")}