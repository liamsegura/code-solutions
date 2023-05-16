//Your goal in this kata is to determine which phrase the girls would say for a flower of a given number of petals, where nb_petals > 0.
function howMuchILoveYou(nbPetals) {
    let arr = ['I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all']
    
    let returned = []
  for(let i = 0; i < nbPetals;i++){
     returned.push(arr[i % arr.length])
    }  
  return returned.slice(-1).toString()
  
}
howMuchILoveYou(7)

